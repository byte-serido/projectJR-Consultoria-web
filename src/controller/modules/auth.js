import axios from "axios";
import router from "@/router";
export default {
  state: {
    user: null,
    token: null,
  },
  getters: {
    // Retorna os dados do usuario logado no momento
    getUser(state) {
      return state.user;
    },

    // Retorna se o token estar ou não autenticado
    isAuthenticated(state) {
      return !!state.token;
    },
  },
  mutations: {
    // Muda os dados do usuario logado no momento
    setLoginUser(state, user) {
      state.user = user;
    },

    // Muda o token setando ele na variavel
    setToken(state, token) {
      state.token = token;
    },

    //Limpa o token
    clearToken(state) {
      state.token = null;
    },
  },
  actions: {
    // Funcionalidade para o login ser executado, buscando o user no banco de dados se ele existir e seu token
    async login({ commit }, user) {
      await axios
        .post("https://project-jr.onrender.com/auth/login/", {
          username: user.username,
          password: user.password,
        })
        .then((resp) => {
          if (resp.status === 201) {
            const token = resp.data.token;
            const username = resp.data.user.username;
            commit("setToken", token);
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
            router.push("/dashboard");
          }
        })
        .catch(() => {
          return alert(
            "Não foi encontrado nenhum login com tal username e senha fornecido! Por favor reveja seu username e senha!"
          );
        });
    },

    // Função de Lougot (sair da aplicação)
    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    },

    // Funcionalidade que checa se o token estar autenticado ou não!
    async checkAuth({ commit, state }) {
      const token = localStorage.getItem("token");
      if (token && token !== state.token) {
        commit("setToken", token);
      }
      if (!token && state.token) {
        commit("clearToken");
      }
    },

    // Funcionalidade que solicita o envio de um email com um token de redefinição de senha
    async requestPasswordResetToken(_, email) {
      try {
        await axios.post(
          `https://project-jr.onrender.com/auth/forgot_password/`,
          {
            email,
          }
        );
      } catch (err) {
        alert("Serviço de redefinição de senha indisponível");
      }
    },

    // Funcionalidade de redefinição de senha
    async resetPassword(_, { email, password, token }) {
      try {
        const res = await axios.post(
          `https://project-jr.onrender.com/auth/reset_password/`,
          {
            email,
            password,
            token,
          }
        );
        if (res.status === 400) {
          throw new Error(res.data.error);
        }
        router.push("/login");
      } catch (err) {
        alert("Serviço de redefinição de senha indisponível");
      }
    },
  },
};
