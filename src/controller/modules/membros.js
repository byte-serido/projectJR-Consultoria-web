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
        getMembers({commit}){
            axios.get("https://pjr-api.onrender.com/member/getall").then(resp =>{
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
        createMember({name,role,phone,registration,description,imgUrl}){
            axios.post("https://pjr-api.onrender.com/member/create",{
                name: name,
                role: role,
                phone: phone,
                registration: registration,
                description:description,
                imgUrl:imgUrl
            }).then(resp =>{
                if(resp.status !== 200){
                    alert("Membro não cadastrado, verifique os dados e tente novamente !!")
                }else{
                    alert("Membro cadastrado com sucesso!!")
                }
            }).catch((error)=>{
                alert(error)
            })
        }
    }
}