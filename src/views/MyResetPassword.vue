<template>
  <section class="container-reset-password">
    <div class="container reset-password">
      <!-- Imagem maior da logo -->
      <img
        class="img-reset-password"
        src="@/assets/login/logo-login.svg"
        alt="Logo da Empresa"
      />
      <!-- Card para efetuar redefinição de senha -->
      <form class="card-reset-password" @submit.prevent="resetPasswordSubmit">
        <!-- Logo da empresa em tamanho menor -->
        <img
          src="@/assets/login/logo-login-min.svg"
          alt="Logo da empresa pequena"
        />
        <!-- Espaço para colocar inputs e texto de recuperação de senha, feito para centralizar tudo.-->
        <div class="box-reset-password">
          <p>Informe um nova senha para sua conta</p>

          <!-- Espaço para exibir mensagens de erro -->
          <div class="errors-reset-password" v-if="errors.length">
            <p class="error" v-for="(error, index) of errors" :key="index">
              {{ errorsMessages[error] }}
            </p>
          </div>

          <input
            class="input-reset-password"
            type="email"
            placeholder="email"
            v-model="formData.email"
            @input="validateEmail"
            required
          />

          <!-- Div especifica para criar um input com icone de visibilidade de senha-->
          <div class="container-input">
            <input
              class="input-reset-password"
              :type="isVisiblity ? 'text' : 'password'"
              placeholder="senha"
              minlength="8"
              v-model="formData.password"
              required
              @input="validatePassword"
            />
            <button
              @click="isVisiblity = !isVisiblity"
              class="button-eye"
              type="button"
            >
              <template v-if="isVisiblity">
                <fa :icon="['fa', 'eye']" style="color: #48b3e2" size="lg" />
              </template>
              <template v-else>
                <fa
                  :icon="['fa', 'eye-slash']"
                  style="color: #48b3e2"
                  size="lg"
                />
              </template>
            </button>
          </div>
          <!-- Div especifica para criar um input com icone de visibilidade de senha-->
          <div class="container-input">
            <input
              class="input-reset-password"
              :type="isVisiblity2 ? 'text' : 'password'"
              placeholder="confirmação de senha"
              v-model="formData.password2"
              minlength="8"
              required
              @input="validatePassword"
            />
            <button
              @click="isVisiblity2 = !isVisiblity2"
              class="button-eye"
              type="button"
            >
              <template v-if="isVisiblity2">
                <fa :icon="['fa', 'eye']" style="color: #48b3e2" size="lg" />
              </template>
              <template v-else>
                <fa
                  :icon="['fa', 'eye-slash']"
                  style="color: #48b3e2"
                  size="lg"
                />
              </template>
            </button>
          </div>
        </div>
        <!-- Button para submeter nova senha -->
        <div v-if="loading" class="spinner"></div>
        <button
          v-else
          type="submit"
          :class="isButtonDiabled ? 'card-button-disabled' : 'card-button'"
          :disabled="isButtonDiabled"
        >
          Redefinir senha
        </button>
      </form>
    </div>
  </section>
</template>

<script>
const API_ERROR_MESSAGES = {
  'User not found': 'Usuário não encontrado',
  'Token is not valid': 'Link de redefinição inválido',
  'Token expired, generate a new one':
    'Link expirado, tente novamente com outro link',
  'Cannot reset password, try again':
    'A redefinição de senha falhou, tente novamente mais tarde',
};
const ERROR_MESSAGES = {
  passwordMismatch: 'As senhas não correspondem',
  passwordLength: 'A senha deve ter no mínimo 8 caracteres',
  invalidEmail: 'Email inválido',
  ...API_ERROR_MESSAGES,
};

export default {
  data() {
    return {
      errorsMessages: ERROR_MESSAGES,
      errors: [],
      formData: {
        email: '',
        token: '',
        password: '',
        password2: '',
      },
      isVisiblity: false,
      isVisiblity2: false,
      loading: false,
    };
  },
  computed: {
    /**
     * Função para indentificar se o botão deve ficar desativado com base nas
     * informações dos campos estarem vazios ou com valores diferentes
     */
    isButtonDiabled() {
      if (
        this.formData.email === '' ||
        this.formData.password === '' ||
        this.formData.password2 === '' ||
        this.errors.filter(
          // Garante que o botão de submissão do form não ficará desabilitado se
          // o erro sendo mostrado for um erro da API
          (err) => !Object.keys(API_ERROR_MESSAGES).some((key) => key === err)
        ).length > 0
      ) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    // Funcionalidade de login
    resetPasswordSubmit() {
      if (!this.isButtonDiabled) {
        this.loading = true;

        try {
          this.errors = [];
          this.$store.dispatch('resetPassword', {
            email: this.formData.email,
            password: this.formData.password,
            token: this.formData.token,
          });
        } catch (err) {
          this.errors.push(err.message);
        }
      }
    },
    /**
     * Função de validação genérica para os campos do formulário
     *
     * @param {string} errorKey
     * @param {boolean} errorCondition
     */
    validateFormField(errorKey, errorCondition) {
      const isErrorVisible = this.errors.some((err) => err === errorKey);

      /**
       * Verifica se está dando erro e se ele ainda não está sendo mostrado,
       * caso isso ocorra, o identificador do erro é adicionado ao array errors
       * e sua mensagem é exibida.
       *
       * Caso o erro não esteja ocorrendo mas sua mensagem esteja visível, o
       * identificador do erro é removido do array, deixando de exibir sua
       * mensagem na tela.
       */
      if (errorCondition && !isErrorVisible) {
        this.errors.push(errorKey);
      } else if (!errorCondition && isErrorVisible) {
        this.errors = this.errors.filter((err) => err !== errorKey);
      }
    },
    /**
     * Valida os campos de senha
     */
    validatePassword() {
      // Valida se os dois inputs de senha tem o mesmo valor
      const PASSWORD_MISMATCH_KEY = 'passwordMismatch';
      const PASSWORD_MISMATCH_CONDITION =
        this.formData.password &&
        this.formData.password2 &&
        this.formData.password !== this.formData.password2;

      this.validateFormField(
        PASSWORD_MISMATCH_KEY,
        PASSWORD_MISMATCH_CONDITION
      );

      // Valida se a senha tem pelo menos 8 digitos
      const PASSWORD_LENGTH_KEY = 'passwordLength';
      const PASSWORD_LENGTH_CONDITION =
        this.formData.password && this.formData.password.length < 8;

      this.validateFormField(PASSWORD_LENGTH_KEY, PASSWORD_LENGTH_CONDITION);
    },
    /**
     * Valida o campo do código de confirmação
     */
    validatePincode() {
      // Valida se o código tem 6 digitos
      const PINCODE_LENGTH_KEY = 'pincodeLength';
      const PINCODE_LENGTH_CONDITION =
        this.formData.token && this.formData.token.length !== 6;

      this.validateFormField(PINCODE_LENGTH_KEY, PINCODE_LENGTH_CONDITION);
    },
    /**
     * Valida o campo de email
     */
    validateEmail() {
      // Valida se é um email válido
      const emailRegex = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

      const VALID_EMAIL_KEY = 'invalidEmail';
      const VALID_EMAIL_CONDITION =
        this.formData.email && !emailRegex.test(this.formData.email);

      this.validateFormField(VALID_EMAIL_KEY, VALID_EMAIL_CONDITION);
    },
  },

  created() {
    this.formData.token = this.$route.params.token;
  },
};
</script>

<style scoped>
.container-reset-password {
  font-family: 'Inter', sans-serif;
  background-image: url('@/assets/login/background.svg');
  background-size: cover;
  height: 100%;
  padding-left: 138px;
  padding-right: 138px;
}

.reset-password {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
}

.card-reset-password {
  width: 500px;
  padding: 54px 40px;
  background-color: #e1e5ed;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
}

.box-reset-password,
.box-password-submited {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  min-width: 100%;
}

.box-reset-password p {
  color: black;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
}

.errors-reset-password {
  background-color: #c10015;
  width: 100%;
  border-radius: 4px;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.errors-reset-password p {
  margin-bottom: 0;
  color: #fff;
}

/* CSS dos inputs */
.container-input {
  position: relative;
  min-width: 100%;
}

.input-reset-password {
  font-family: 'Inter', sans-serif;
  min-width: 100%;
  padding: 16px;
  background-color: white;
  border: solid 1px white;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  position: relative;
  transition: all 400ms ease;
}

.input-reset-password:focus {
  border: 1px solid #48b3e2;
  outline: none;
}

.button-eye {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  border: none;
  background: transparent;
  outline: none;
  padding: 20px;
  cursor: pointer;
}

/* CSS do link */
.link-reset-password {
  text-decoration: none;
  color: #48b3e2;
  font-size: 1rem;
  letter-spacing: -1%;
  font-weight: 700;
  position: relative;
  transition: all 400ms ease;
}

.link-reset-password:hover {
  color: #1e789e;
}

/* CSS do button de login */
.card-button {
  border-radius: 4px;
  background-color: #52b6e3;
  font-family: 'Inter', sans-serif;
  padding: 12px 16px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #f5f5f5;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 400ms ease;
}

.card-button:hover {
  background-color: #1e789e;
}

.card-button-disabled {
  border-radius: 4px;
  background-color: #9c9b9b;
  font-family: 'Inter', sans-serif;
  padding: 12px 16px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #3f4547;
  border: none;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsividade */

@media (max-width: 1080px) {
  .container-reset-password {
    font-family: 'Inter', sans-serif;
    background-image: url('@/assets/login/background.svg');
    background-size: cover;
    min-height: 100%;
    padding: 40px 30px;
  }
  .img-reset-password {
    display: none;
  }

  .reset-password {
    padding: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
}

@media (max-width: 490px) {
  .card-reset-password {
    padding: 54px 40px;
    min-width: 280px;
    background-color: #e1e5ed;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
  }

  .input-reset-password {
    font-family: 'Inter', sans-serif;
    padding: 16px;
    background-color: white;
    border: solid 1px white;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 700;
    min-width: 88%;
    position: relative;
    transition: all 400ms ease;
  }
}
</style>
