import axios from 'axios';

export default {
  state: {
    users: [],
  },

  getters: {
    getUsers(state) {
      return state.users;
    },
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },

  actions: {
    async fetchUserList({ commit }) {
      await axios
        .get('https://pjr-api.onrender.com/user/getall')
        .then((resp) => {
          commit('setUsers', resp.data);
        });
    },
  },
};
