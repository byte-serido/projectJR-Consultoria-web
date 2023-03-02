import axios from 'axios';

export default{
    state:{
        depoiments:[],
        services:[],
        posts:[],
        contact:{},
    },
    getters:{
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
        }
    },
    actions:{
        setInDepoiments({commit}){
            axios.get("http://localhost:3333/depositions/getall").then(resp =>{
                const dataDepoiments = resp.data;
                commit('setDepoiments',dataDepoiments);
            }).catch((error)=>{
                return error.message
            })
        },
        setInServices({commit}){
            axios.get("http://localhost:3333/solution/getall/").then(resp =>{
                const dataServices = resp.data;
                commit('setServices',dataServices);
            }).catch((error)=>{
                return error.message
            })
        }
    }
}
