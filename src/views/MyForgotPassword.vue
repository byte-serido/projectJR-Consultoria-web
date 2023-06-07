<template>
  <section class="container-forgot-password">
    <div class="container forgot-password">
      <!-- Imagem maior da logo -->
      <img
        class="img-forgot-password"
        src="@/assets/login/logo-login.svg"
        alt="Logo da Empresa"
      />
      <!-- Card para iniciar redefinição da senha -->
      <form class="card-forgot-password" @submit.prevent="forgotPasswordSubmit">
        <!-- Logo da empresa em tamanho menor -->
        <img
          src="@/assets/login/logo-login-min.svg"
          alt="Logo da empresa pequena"
        />

        <!-- Espaço para colocar inputs e texto com instruções, feito para centralizar tudo.-->
        <div class="box-forgot-password" v-if="isEmailSent">
          <div class="box-email-sent">
            <p>Link enviado!</p>
            <p>
              Verifique sua caixa de spam caso não encontre o email na sua caixa
              de entrada.
            </p>
          </div>
        </div>
        <!-- Espaço para colocar inputs e texto com instruções, feito para centralizar tudo.-->
        <div class="box-forgot-password" v-else>
          <p>
            Informe o email associado a sua conta e lhe enviaremos um link para
            definir uma nova senha
          </p>

          <!-- Espaço para exibir mensagens de erro -->
          <div class="errors-forgot-password" v-if="errors.length">
            <p class="error" v-for="(error, index) of errors" :key="index">
              {{ errorsMessages[error] }}
            </p>
          </div>

          <input
            class="input-forgot-password"
            type="email"
            placeholder="email"
            v-model="email"
            required
            @input="validateEmail"
          />
          <input
            class="input-forgot-password"
            type="email"
            placeholder="repita seu email"
            v-model="confirmacaoEmail"
            required
            @input="validateEmail"
          />
        </div>
        <!-- Button para submeter o formulário-->
        <div v-if="loading" class="spinner"></div>
        <button
          v-else-if="!isEmailSent"
          :class="isButtonDisabled ? 'card-button-disabled' : 'card-button'"
          :disabled="isButtonDisabled"
          type="submit"
        >
          Redefinir senha
        </button>
      </form>
    </div>
  </section>
</template>

<script>
const ERROR_MESSAGES = {
  invalidEmail: 'Email inválido',
  emailMismatch: 'Os emails não correspondem',
};

export default {
  data() {
    return {
      confirmacaoEmail: '',
      email: '',
      errors: [],
      errorsMessages: ERROR_MESSAGES,
      isEmailSent: false,
      isVisiblity: false,
      loading: false,
    };
  },
  computed: {
    /**
     * Função para indentificar se o botão deve ficar desativado com base na
     * informações dos campos estarem vazios ou com valores diferentes
     */
    isButtonDisabled() {
      if (
        this.email === '' ||
        this.confirmacaoEmail === '' ||
        this.errors.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    // Funcionalidade de redefinição de senha
    forgotPasswordSubmit() {
      /* Verifica se o form pode ser submetido com base nas validações usadas
      para determinar o estado do botão de submissão */
      if (!this.isButtonDisabled) {
        // Exibe indicador de carregamento enquanto realiza a requisição a api
        this.loading = true;

        this.$store.dispatch('requestPasswordResetToken', this.email);

        setTimeout(() => {
          this.loading = false;
          this.isEmailSent = true;
        }, 1500);
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
     * Função de validação dos campos de email
     */
    validateEmail() {
      // Valida se é um email válido
      const emailRegex = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

      const VALID_EMAIL_KEY = 'invalidEmail';
      const VALID_EMAIL_CONDITION = this.email && !emailRegex.test(this.email);

      this.validateFormField(VALID_EMAIL_KEY, VALID_EMAIL_CONDITION);

      // Valida se os dois inputs de email tem o mesmo valor
      const EMAIL_MISMATCH_KEY = 'emailMismatch';
      const EMAIL_MISMATCH_CONDITION =
        this.confirmacaoEmail && this.email !== this.confirmacaoEmail;

      this.validateFormField(EMAIL_MISMATCH_KEY, EMAIL_MISMATCH_CONDITION);
    },
  },
};
</script>

<style scoped>
.container-forgot-password {
  font-family: 'Inter', sans-serif;
  background-image: url('@/assets/login/background.svg');
  background-size: cover;
  height: 100%;
  padding-left: 138px;
  padding-right: 138px;
}

.forgot-password {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
}

.card-forgot-password {
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

.box-forgot-password,
.box-email-sent {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  min-width: 100%;
}

.box-email-sent p {
  margin: 0;
}

.box-forgot-password p {
  color: black;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
}

.errors-forgot-password {
  background-color: #c10015;
  width: 100%;
  border-radius: 4px;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.errors-forgot-password p {
  margin-bottom: 0;
  color: #fff;
}

/* CSS dos inputs */
.input-forgot-password {
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

.input-forgot-password:focus {
  border: 1px solid #48b3e2;
  outline: none;
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
  text-decoration: none;
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
  .container-forgot-password {
    font-family: 'Inter', sans-serif;
    background-image: url('@/assets/login/background.svg');
    background-size: cover;
    min-height: 100%;
    padding: 40px 30px;
  }
  .img-forgot-password {
    display: none;
  }

  .forgot-password {
    padding: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
}

@media (max-width: 490px) {
  .card-forgot-password {
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

  .input-forgot-password {
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
