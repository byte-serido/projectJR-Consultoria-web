import axios from 'axios';
import router from '@/router';
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
        async login({commit},user){
            await axios.post("https://pjr-api.onrender.com/auth/login/", {
                username: user.username,
                password: user.password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
              }).then(resp => {
                if(resp.status === 201){
                    commit("setLoginUser", resp.data);
                    router.push("/dashboard");
                }
              }).catch(()=> {
                return alert("Não foi encontrado nenhum login com tal username e senha fornecido! Por favor reveja seu username e senha!");
              });
        }
    }
}