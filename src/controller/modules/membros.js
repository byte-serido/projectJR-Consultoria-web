import axios from 'axios';

export default{
    state:{
        members:[],
        valid:true,
    },

    getters:{
        getMembers(state){
            return state.members;
        },
        getValid(state){
            return state.valid;
        }
    },

    mutations:{
        setMembers(state, member){
            state.members = member;
        },
        setValid(state, isValid){
            state.valid = isValid;
        }
    },

    actions:{
        async getMembers({commit}){
            await axios.get("https://pjr-api.onrender.com/member/getall").then(resp =>{
                if(resp.status === 200){
                    commit('setMembers',resp.data);
                    commit('setValid', false);
                    
                }else{
                    commit('setValid', true);
                }
            }).catch(()=>{
                commit('setValid', true);
            })
        },
    }
}