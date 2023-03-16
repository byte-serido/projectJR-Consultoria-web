import axios from 'axios';

export default{
    state:{
        depoiments:[],
        services:[],
        posts:[],
        contact:{},
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
    },
    actions:{
        async setInDepoiments({commit}){
            await axios.get("https://api-pjr.onrender.com/depositions/getall").then(resp =>{
                if(resp.status === 201){
                    commit('setDepoiments',resp.data);
                    return(false);
                }else{
                    return(true);
                }
            }).catch(()=>{
                return(true);
            })
        },
        async setInServices({commit}){
            await axios.get("https://api-pjr.onrender.com/solution/getall").then(resp =>{
                if(resp.status === 201){
                    commit('setServices',resp.data);
                    return(false)
                }else{
                    return(true)
                }
            }).catch(()=>{
                return(true);
            })
        }
    }
}
