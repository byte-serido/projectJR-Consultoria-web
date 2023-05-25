import axios from 'axios';

export default{
    state:{
        members:[],
        member:{},
        valid:true,
        validMember:true
    },

    getters:{
        getMembers(state){
            return state.members;
        },
        getMember(state){
            return state.member;
        },
        getValid(state){
            return state.valid;
        },
        getValidMember(state){
            return state.validMember;
        }
    },

    mutations:{
        setMembers(state, member){
            state.members = member;
        },
        setMember(state, member){
            state.member = member;
        },
        setValid(state, isValid){
            state.valid = isValid;
        },
        setValidMember(state, isValid){
            state.validMember = isValid;
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
        async getMemberAction({commit},idMember){
            await axios.get(`https://pjr-api.onrender.com/member/getone${idMember}`).then(resp =>{
                if(resp.status === 200){
                    commit('setMember',resp.data);
                    commit('setValidMember', false);
                    
                }else{
                    commit('setValidMember', true);
                }
            }).catch(()=>{
                commit('setValidMember', true);
            })
        },
    }
}