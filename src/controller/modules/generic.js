import axios from "axios";

export default {
  state: {
    isConnect: false,
  },
  getters: {
    getIsConnect(state) {
      return state.isConnect;
    },
  },
  mutations: {
    setIsConnect(state, value) {
      state.isConnect = value;
    },
  },
  actions: {
    setInConnect({ commit }) {
      axios
        .get("https://project-jr.onrender.com/")
        .then((resp) => {
          if (resp.status === 200) {
            commit("setIsConnect", false);
          } else {
            commit("setIsConnect", true);
          }
        })
        .catch(() => {
          commit("setIsConnect", true);
        });
    },
  },
};
