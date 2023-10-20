import axios from "axios";

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
    updateUser(state, user) {
      state.users = state.users.map((u) => {
        if (u.id === user.id) return user;
        return u;
      });
    },
    removeUser(state, id) {
      state.users = state.users.filter((user) => user.id !== id);
    },
  },

  actions: {
    async fetchUserList({ commit }) {
      try {
        const resp = await axios.get(
          "https://project-jr.onrender.com/user/getall"
        );
        commit("setUsers", resp.data);
      } catch (err) {
        return;
      }
    },
    async createUser({ commit }, user) {
      try {
        const resp = await axios.post(
          "https://project-jr.onrender.com/auth/register",
          {
            username: user.username,
            name: user.name,
            email: user.email,
            password: user.password,
            mod: user.mod,
          }
        );
        if (resp.status === 200) {
          commit("addUser", resp.data.user);
        }
      } catch (error) {
        if (error.response) {
          throw new Error(error.response.data.error);
        } else {
          throw new Error("Um erro ocorreu");
        }
      }
    },
    async updateUser({ commit }, user) {
      try {
        const resp = await axios.put(
          "https://project-jr.onrender.com/user/update",
          {
            id: user.id,
            username: user.username,
            name: user.name,
            email: user.email,
            password: user.password ? user.password : undefined,
            mod: user.mod,
          }
        );
        if (resp.status === 200) {
          commit("updateUser", user);
        }
      } catch (error) {
        if (error.response) {
          throw new Error(error.response.data.error);
        } else {
          throw new Error("Um erro ocorreu");
        }
      }
    },
    async deleteUser({ commit }, id) {
      try {
        const resp = await axios.delete(
          "https://project-jr.onrender.com/user/delete",
          {
            data: {
              id: id,
            },
          }
        );
        if (resp.status === 200) {
          commit("removeUser", id);
        }
      } catch (error) {
        if (error.response) {
          throw new Error(error.response.data.error);
        } else {
          throw new Error("Um erro ocorreu");
        }
      }
    },
  },
};
