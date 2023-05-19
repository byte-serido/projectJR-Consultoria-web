import axios from 'axios';

export default{
    state:{
        members:[],
        IsValid:true,
    },

    getters:{
        getMembers(state){
           return state.members;
        },
        getIsValid(state){
            return state.IsValid;
        }
    },

    mutations:{
        setMembers(state, member){
            state.members = member;
        },
        setIsValid(state, isValid){
            state.isValid = isValid;
        }
    },

    actions:{
        async getMembers({commit}){
            await axios.get("https://pjr-api.onrender.com/member/getall").then(resp =>{
                if(resp.status === 200){
                    commit('setMembers',resp.data);
                    commit('setIsValid', false);
                    
                }else{
                    commit('setIsValid', true);
                }
            }).catch(()=>{
                commit('setIsValid', true);
            })
        },
    }
}