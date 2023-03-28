import axios from 'axios';
import router from '@/router';
export default{
    state:{
        user:{},
        token:null
    },
    getters:{
        getUser(state){
            return state.user;
        },
        
        isAuthenticated(state) {
            return !!state.token
        }
    },
    mutations:{
        setLoginUser(state, user){
            state.user = user;
        },

        setToken(state, token) {
            state.token = token
        },

        clearToken(state) {
            state.token = null
        }
    },
    actions:{
        async login({commit},user){
            await axios.post("https://pjr-api.onrender.com/auth/login/", {
                username: user.username,
                password: user.password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
              }).then(resp => {
                if(resp.status === 201){
                    const token = resp.data.token;
                    commit('setToken', token);
                    localStorage.setItem('token', token);
                    commit("setLoginUser", {username:resp.data.username, password:resp.data.password,mod:resp.data.mod});
                    router.push("/dashboard");
                }
              }).catch(()=> {
                return alert("Não foi encontrado nenhum login com tal username e senha fornecido! Por favor reveja seu username e senha!");
              });
        },

        logout({ commit }) {
            commit('clearToken')
            localStorage.removeItem('token')
        },

        async checkAuth({ commit, state }) {
            const token = localStorage.getItem('token')
            if (token && token !== state.token) {
              commit('setToken', token)
            }
            if (!token && state.token) {
              commit('clearToken')
            }
        },
    }
}