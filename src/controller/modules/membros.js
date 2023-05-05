import axios from 'axios';

export default{
    state:{
        members:[],
        IsValidMember:true,
    },

    getters:{
        getMembers(state){
           return state.members;
        },
        getIsValidMember(state){
            return state.IsValidMember;
        }
    },

    mutations:{
        setMembers(state, member){
            state.members = member;
        },
        setIsValidMember(state, isValid){
            state.isValidMember = isValid;
        }
    },

    actions:{
        async getMembers({commit}){
            await axios.get("https://pjr-api.onrender.com/member/getall").then(resp =>{
                if(resp.status !== 200){
                    commit('setIsValidMember', true);
                    
                }else{
                    commit('setMembers',resp.data);
                    commit('setIsValidMember', false);
                }
            }).catch(()=>{
                commit('setIsValidMember', true);
            })
        },
        async createMember(member){
            return console.log(member.name);
            // await axios.post("https://pjr-api.onrender.com/member/create",{
            //     name: member.name,
            //     role: member.role,
            //     phone: member.phone,
            //     registration: member.registration,
            //     description:member.description,
            //     imgUrl:member.imgUrl
            // }).then(resp =>{
            //     if(resp.status !== 200){
            //         return console.log("Membro não cadastrado, verifique os dados e tente novamente !!")
            //     }else{
            //         return console.log("Membro cadastrado com sucesso!!")
            //     }
            // }).catch((error)=>{
            //     return console(error)
            // })
        }
    }
}