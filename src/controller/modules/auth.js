import axios from 'axios';

export default{
    state:{
        user:[]
    },
    getters:{
        getUser(state){
            return state.user;
        }
    },
    mutations:{
        setLoginUser(state, user){
            state.user = user;
        }
    },
    actions:{
        login({commit},user){
            axios.post("https://pjr-api.onrender.com/auth/login/", {
                username: user.username,
                password: user.password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
              }).then(resp => {
                if(resp.status === 201){
                    commit("setLoginUser", resp.data);
                    return alert("success");
                }
              }).catch(()=> {
                return alert("Não foi encontrado nenhum login com tal username e senha fornecido! Por favor reveja seu username e senha!");
              });
        }
    }
}