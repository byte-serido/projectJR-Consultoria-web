import axios from 'axios';

export default {
    state: {
        posts: [],
        post: {},
        valid: true,
        validPost: true
    },

    getters: {
        getPosts(state) {
            return state.posts;
        },
        getPost(state) {
            return state.post;
        },
        getValidPosts(state) {
            return state.valid;
        },
        getValidPost(state) {
            return state.validPost;
        }
    },

    mutations: {
        setPosts(state, post) {
            state.posts = post;
        },
        setPost(state, post) {
            state.post = post;
        },
        setValid(state, isValid) {
            state.valid = isValid;
        },
        setValidPost(state, isValid) {
            state.validPost = isValid;
        }
    },

    actions: {
        async getPosts({ commit }) {
            await axios.get("https://pjr-api.onrender.com/post/getall").then(resp => {
                if (resp.status === 200) {
                    commit('setPosts', resp.data);
                    commit('setValid', false);

                } else {
                    commit('setValid', true);
                }
            }).catch(() => {
                commit('setValid', true);
            })
        },
        async getPostAction({ commit }, idPost) {
            await axios.get(`https://pjr-api.onrender.com/post/getone${idPost}`).then(resp => {
                if (resp.status === 200) {
                    commit('setPost', resp.data);
                    commit('setValidPost', false);

                } else {
                    commit('setValidPost', true);
                }
            }).catch(() => {
                commit('setValidPost', true);
            })
        },

    }
}