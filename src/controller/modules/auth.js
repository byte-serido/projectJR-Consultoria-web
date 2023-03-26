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
                    return console.log("success");
                }else if(resp.status === 401){
                    return console.log("not undifynid");
                }else if(resp.status === 400){
                    return console.log("verify datatype");
                }
              }).catch(error => {
                console.log(error);
              });
        }
    }
}