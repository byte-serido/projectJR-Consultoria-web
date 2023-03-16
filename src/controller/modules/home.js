import axios from 'axios';

export default{
    state:{
        depoiments:[],
        services:[],
        posts:[],
        contact:{},
        isValid:true
    },
    getters:{
        getIsValid(state){
            return state.isValid
        },
        getDepoiments(state){
            return state.depoiments;
        },
        getServices(state){
            return state.services;
        },
        getPosts(state){
            return state.posts;
        }
    },
    mutations:{
        setDepoiments(state,depoiments){
            state.depoiments = depoiments;
        },
        setServices(state,services){
            state.services = services;
        },
        setPosts(state,posts){
            state.posts = posts;
        },
        setContact(state,contact){
            state.contact = contact;
        },
        setIsValid(state,isValid){
            state.isValid = isValid;
        }
    },
    actions:{
        setInDepoiments({commit}){
            axios.get("https://api-pjr.onrender.com/depositions/getall/").then(resp =>{
                if(resp.status === 201){
                    commit('setDepoiments',resp.data);
                    commit('setIsValid', false);
                }else{
                    commit('setIsValid', true);
                }
            }).catch(()=>{
                commit('setIsValid', true);
            })
        },
        setInServices({commit}){
            axios.get("https://api-pjr.onrender.com/solution/getall/").then(resp =>{
                if(resp.status === 201){
                    commit('setServices',resp.data);
                    commit('setIsValid', false);
                }else{
                    commit('setIsValid', true);
                }
            }).catch(()=>{
                commit('setIsValid', true);
            })
        }
    }
}