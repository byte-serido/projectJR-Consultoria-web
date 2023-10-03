import * as validators from '@vuelidate/validators';
import { createI18n } from 'vue-i18n/index.mjs';

const { createI18nMessage } = validators;

// Define as mensagens traduzidas
const messages = {
  'pt-BR': {
    validations: {
      email: '"{model}" não é um email válido',
      minLength: 'O campo "{property}" deve ter no mínimo {min} caracteres',
      required: 'O campo "{property}" é obrigatório',
      requiredIf: 'O campo "{property}" é obrigatório',
      sameAs: 'Os campos "{property}" e "{equalTo}" não correspondem',
    },
  },
};

// Cria objeto i18n
export const i18n = createI18n({
  locale: 'pt-BR',
  messages,
});

const withI18nMessage = createI18nMessage({
  t: i18n.global.t.bind(i18n),
});

// Insere novas mensagens nos validadores
export const required = withI18nMessage(validators.required);

export const requiredIf = withI18nMessage(validators.requiredIf, {
  withArguments: true,
});

export const minLength = withI18nMessage(validators.minLength, {
  withArguments: true,
});

export const email = withI18nMessage(validators.email);

export const sameAs = withI18nMessage(validators.sameAs, {
  withArguments: true,
});
