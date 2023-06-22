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
    async createUser({ commit }, user) {
      try {
        const resp = await axios.post(
          'https://pjr-api.onrender.com/auth/register',
          {
            username: user.username,
            name: user.name,
            email: user.email,
            password: user.password,
            mod: user.mod,
          }
        );
        if (resp.status === 200) {
          commit('addUser', resp.data.user);
        }
      } catch (error) {
        if (error.response) {
          throw new Error(error.response.data.error);
        } else {
          throw new Error('Um erro ocorreu');
        }
      }
    },
  },
};
