<template>
  <SpinnerLoading v-if="isLoading"></SpinnerLoading>

  <div v-else-if="showNotFound" class="not-found">
    <h2>Usuário não encontrado</h2>
    <router-link to="/usuarios" class="btn">
      Ir para lista de usuários
    </router-link>
  </div>

  <div class="container-details" v-else>
    <div class="data-details">
      <h1>Detalhes</h1>

      <div class="erros-list" v-if="v$.$errors.length">
        <div v-for="error of v$.$errors" :key="error.$uid" class="erros">
          <strong>{{ error.$message }}</strong>
        </div>
      </div>

      <div class="card-detail">
        <div class="card-item">
          <label for="update-user-nome-input">Nome:</label>
          <input
            id="update-user-nome-input"
            type="text"
            v-model="userData.Nome"
            onkeypress="return isNaN(event.key) || event.key === ' '"
          />
        </div>
        <div class="card-item">
          <label for="update-user-email-input">Email:</label>
          <input
            id="update-user-email-input"
            type="text"
            v-model="userData.Email"
          />
        </div>
        <div class="card-item">
          <label for="update-user-username-input">Username:</label>
          <input
            id="update-user-username-input"
            type="text"
            v-model="userData.Username"
          />
        </div>
        <div class="card-item">
          <label for="update-user-mod-input">Tipo de usuário:</label>
          <select
            id="update-user-mod-input"
            class="input"
            v-model="userData.mod"
          >
            <option
              v-for="opt in modOptions"
              :value="opt.value"
              :key="opt.value"
            >
              {{ opt.text }}
            </option>
          </select>
        </div>
        <div class="card-item">
          <label for="update-user-password-input">Senha:</label>
          <input
            id="update-user-password-input"
            :class="{
              error: v$.userData.Senha.$error,
              input: !v$.userData.Senha.$error,
            }"
            type="password"
            v-model="userData.Senha"
          />
        </div>
        <div class="card-item">
          <label for="update-user-password2-input">Confirmação de senha:</label>
          <input
            id="update-user-password2-input"
            :class="{
              error: v$.userData.confirmacaoSenha.$error,
              input: !v$.userData.confirmacaoSenha.$error,
            }"
            type="password"
            v-model="userData.confirmacaoSenha"
          />
        </div>
      </div>
    </div>

    <div class="settings-details">
      <h1>Configurações</h1>
      <SpinnerLoading v-if="showButtonSpinner"></SpinnerLoading>
      <template v-else>
        <button @click="updateUser()"><p>Salvar Alterações</p></button>
        <button @click="deleteUser()" class="remove">
          <p>Deletar usuário</p>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import SpinnerLoading from '@/components/MySpinnerLoading.vue';
import { useVuelidate } from '@vuelidate/core';
import { helpers } from '@vuelidate/validators';
import { required, email, minLength, sameAs } from '@/utils/i18n-validators';

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  components: {
    SpinnerLoading,
  },
  data() {
    return {
      userData: {
        Nome: '',
        Email: '',
        Username: '',
        mod: '',
        Senha: '',
        confirmacaoSenha: '',
      },
      modOptions: [
        {
          value: '',
          text: 'Comum',
        },
        {
          value: 'admin',
          text: 'Administrador',
        },
      ],
      isLoading: true,
      showButtonSpinner: false,
      showNotFound: false,
    };
  },
  computed: {
    usersList() {
      return this.$store.getters.getUsers;
    },
  },
  mounted() {
    this.loadSelectedUser();
  },
  methods: {
    /**
     * Carrega os dados do usuário a ser exibido
     */
    async loadSelectedUser() {
      const id = this.$route.params.user;
      if (this.usersList.length == 0) {
        await this.$store.dispatch('fetchUserList'); // se sim, carrega a lista
      }
      if (!this.usersList.some((user) => user.id === id)) {
        this.showNotFound = true;
      } else {
        const foundUser = this.usersList.filter((user) => user.id === id)[0];
        this.userData = {
          confirmacaoSenha: '',
          Email: foundUser.email,
          mod: foundUser.mod,
          Nome: foundUser.name,
          Senha: '',
          Username: foundUser.username,
        };
      }
      this.isLoading = false;
    },
    /**
     * Realiza a atualização do usuário
     */
    async updateUser() {
      this.showButtonSpinner = true;
      const isFormValid = await this.v$.$validate();
      if (!isFormValid) {
        return (this.showButtonSpinner = false);
      }

      try {
        await this.$store.dispatch('updateUser', {
          id: this.$route.params.user,
          username: this.userData.Username,
          email: this.userData.Email,
          password: this.userData.Senha,
          name: this.userData.Nome,
          mod: this.userData.mod,
        });
        this.$router.push({ name: 'usuarios' });
      } catch (error) {
        this.showButtonSpinner = false;
        alert(`${error.message}`);
      }
    },
    /**
     * Realiza a exclusão do usuário
     */
    async deleteUser() {
      this.showButtonSpinner = true;
      try {
        await this.$store.dispatch('deleteUser', this.$route.params.user);
        this.$router.push({ name: 'usuarios' });
      } catch (error) {
        this.showButtonSpinner = false;
        alert(`${error.message}`);
      }
    },
  },
  validations() {
    return {
      userData: {
        Nome: {
          required,
          minLength: minLength(3),
          $lazy: true,
          $message: 'O campo nome é obrigatório',
        },
        Email: {
          required,
          email,
          $lazy: true,
        },
        Username: {
          required,
          minLength: minLength(4),
          $lazy: true,
        },
        Senha: {
          required,
          minLength: minLength(8),
          $lazy: true,
        },
        confirmacaoSenha: {
          required: helpers.withMessage(
            'O campo "Confirmação de senha" é obrigatório',
            required
          ),
          sameAs: helpers.withMessage(
            'Os campos "Senha" e "Confirmação de senha" não correspondem',
            sameAs(this.userData.Senha)
          ),
          $lazy: true,
        },
      },
    };
  },
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.container-details {
  padding-bottom: 40px;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: 'Inter', sans-serif;
  gap: 60px;
  width: 100%;
}

h1,
.not-found h2 {
  color: #023f5c;
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
}

label {
  margin: 0;
  padding: 0;
  color: #023f5c;
  font-weight: 600;
  font-size: 1rem;
}

p {
  margin: 0;
  padding: 0;
}

.data-details {
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.settings-details {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
}

button,
.btn {
  font-family: 'Inter', sans-serif;
  padding: 10px;
  background-color: #023f5c;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  transition: all 400ms ease;
  text-decoration: none;
}

.settings-details button {
  max-width: 150px;
}

button:hover,
.btn:hover {
  background-color: #013249;
}

button p,
.btn p {
  font-size: 1rem;
  font-weight: 300;
}

.remove {
  background-color: rgb(189, 3, 3);
}

.remove:hover {
  background-color: rgb(139, 3, 3);
}

.card-detail {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-item p {
  font-weight: 500;
}

/* inputs */
.card-item input,
.card-item select {
  width: 100%;
  padding: 10px 6px;
  border: #8db5c7 solid 1px;
  border-radius: 4px;
}

.card-item select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.card-item input:focus,
.card-item select:focus {
  border: 2px solid #41a8d3;
  outline: none;
}

.error {
  width: 100%;
  padding: 10px 6px;
  border-radius: 4px;
  border: #ec3824 solid 1px;
}

.error:focus {
  outline: none;
}

.erros-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0 0 20px;
}

.erros {
  padding: 8px;
  border: #ec3824 2px solid;
  background-color: transparent;
  color: #ec3824;
  font-size: 1rem;
  font-weight: bolder;
  border-radius: 10px;
  flex-grow: 1;
  text-align: center;
}

@media (max-width: 1188px) {
  .container-details {
    padding-bottom: 40px;
    color: black;
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    gap: 20px;
    width: 100%;
  }
}
</style>
