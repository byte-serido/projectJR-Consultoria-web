import dataDepoiments from "@/utils/data"

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
            commit('setDepoiments',dataDepoiments);
        }
    }
}
