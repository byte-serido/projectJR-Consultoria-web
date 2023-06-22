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
    addUser(state, user) {
      state.users = [user, ...state.users];
    },
  },

  actions: {
    async fetchUserList({ commit }) {
      try {
        const resp = await axios.get(
          'https://pjr-api.onrender.com/user/getall'
        );
        commit('setUsers', resp.data);
      } catch (err) {
        return;
      }
    },
  },
};
