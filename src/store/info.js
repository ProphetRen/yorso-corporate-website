import firebase from "firebase/compat/app";

export default {
    state: {
        info: {},
        posts:null,
        activities:null
    },
    mutations: {
        setInfo(state, info) {
            state.info = info
        },
        setPosts(state, posts){
            state.posts = posts
        },
        setActivities(state, activities){
            state.activities = activities
        },
        clearInfo(state){
            state.info = {}
        }
    },
    actions: {
        async fetchInfo({dispatch, commit}) {
            try {
                const uid = await dispatch('getUid')
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                const posts = (await firebase.database().ref(`/posts`).once('value')).val()
                const activities = (await firebase.database().ref(`/activities`).once('value')).val()
                commit('setInfo', info)
                commit('setPosts', posts)
                commit('setActivities',activities )
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        info: s => s.info,
        posts: s => s.posts,
        activities: s => s.activities
    }
}