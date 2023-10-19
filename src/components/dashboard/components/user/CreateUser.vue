<template>
  <div class="create-user">
    <form class="form">
      <h1>Crie um novo usuário!</h1>

      <div class="erros-list" v-if="v$.$errors.length">
        <div v-for="error of v$.$errors" :key="error.$uid" class="erros">
          <strong>{{ error.$message }}</strong>
        </div>
      </div>

      <div class="form-grid">
        <div class="form-item">
          <label for="create-user-name-input">Nome:</label>
          <input
            id="create-user-name-input"
            :class="{
              error: v$.formData.Nome.$error,
              input: !v$.formData.Nome.$error,
            }"
            type="text"
            onkeypress="return isNaN(event.key) || event.key === ' '"
            v-model="formData.Nome"
          />
        </div>
        <div class="form-item">
          <label for="create-user-email-input">Email:</label>
          <input
            id="create-user-email-input"
            :class="{
              error: v$.formData.Email.$error,
              input: !v$.formData.Email.$error,
            }"
            type="email"
            v-model="formData.Email"
          />
        </div>
        <div class="form-item">
          <label for="create-user-username-input">Username:</label>
          <input
            id="create-user-username-input"
            :class="{
              error: v$.formData.Username.$error,
              input: !v$.formData.Username.$error,
            }"
            type="text"
            v-model="formData.Username"
          />
        </div>
        <div class="form-item">
          <label for="create-user-mod-input">Tipo de usuário:</label>
          <select
            id="create-user-mod-input"
            class="input"
            v-model="formData.mod"
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
        <div class="form-item">
          <label for="create-user-password-input">Senha:</label>
          <input
            id="create-user-password-input"
            :class="{
              error: v$.formData.Senha.$error,
              input: !v$.formData.Senha.$error,
            }"
            type="password"
            v-model="formData.Senha"
          />
        </div>
        <div class="form-item">
          <label for="create-user-password2-input">Confirmação de senha:</label>
          <input
            id="create-user-password2-input"
            :class="{
              error: v$.formData.confirmacaoSenha.$error,
              input: !v$.formData.confirmacaoSenha.$error,
            }"
            type="password"
            v-model="formData.confirmacaoSenha"
          />
        </div>
      </div>
    </form>

    <div class="form-button" v-if="showSubmit">
      <button type="submit" @click="createUser()">Salvar</button>
      <button @click="cancel()" class="cancel">Cancelar</button>
    </div>
    <div class="form-loading" v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { helpers } from '@vuelidate/validators';
import Loading from '@/components/MySpinnerLoading.vue';
import { required, email, minLength, sameAs } from '@/utils/i18n-validators';

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  components: {
    Loading,
  },
  data() {
    return {
      formData: {
        Email: '',
        mod: '',
        Nome: '',
        Senha: '',
        confirmacaoSenha: '',
        Username: '',
      },
      showSubmit: true,
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
    };
  },
  methods: {
    cancel() {
      this.$router.push({ name: 'usuarios' });
    },
    async createUser() {
      this.showSubmit = false;
      const isFormValid = await this.v$.$validate();
      if (!isFormValid) {
        return (this.showSubmit = true);
      }

      try {
        await this.$store.dispatch('createUser', {
          username: this.formData.Username,
          email: this.formData.Email,
          password: this.formData.Senha,
          name: this.formData.Nome,
          mod: this.formData.mod,
        });
        this.$router.push({ name: 'usuarios' });
      } catch (error) {
        this.showSubmit = true;
        alert(`${error.message}`);
      }
    },
  },
  validations() {
    return {
      formData: {
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
            sameAs(this.formData.Senha)
          ),
          $lazy: true,
        },
      },
    };
  },
};
</script>

<style scoped>
.create-user {
  color: black;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  gap: 20px;
  width: 100%;
}

h1 {
  color: #023f5c;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 30px;
}

span,
label {
  font-size: 1rem;
  color: #023f5c;
  font-weight: 600;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  width: 100%;
}

.form-button {
  display: flex;
  align-items: center;
  gap: 12px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.form-item .input {
  width: 100%;
  padding: 10px 6px;
  border: #8db5c7 solid 1px;
  border-radius: 4px;
}

.form-item .input:focus {
  border: 1px solid #41a8d3;
  outline: none;
}

.form-loading {
  display: flex;
  padding: 20px;
}

button {
  max-width: 150px;
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
}

button:hover {
  background-color: #013249;
}

button p {
  font-size: 1rem;
  font-weight: 300;
}

.cancel {
  background-color: rgb(236, 69, 69);
}

.cancel:hover {
  background-color: rgb(179, 44, 44);
}

button:hover {
  background-color: #013249;
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
  margin: 20px 0;
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

/* Responsive */
@media (max-width: 1188px) {
  .form-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 860px) {
  .form {
    width: 100%;
  }
  .form-grid {
    display: flex;
    flex-direction: column;
  }

  .form-item .input {
    width: 100%;
    padding: 10px 6px;
    border: #8db5c7 solid 1px;
    border-radius: 4px;
  }
}
</style>
