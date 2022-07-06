import firebase from "firebase/compat/app";

export default {
    actions: {
        async createPost({dispatch, commit}, payload) {
            try {
                console.log('fuck', payload)
                return await firebase.database().ref(`/posts`).push(payload)
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async deletePost({dispatch, commit}, payload) {
            console.log(payload.arrOfPostsKeys)
            for (let i = 0; i < payload.arrOfPostsKeys.length; i++) {
                if (payload.arrOfPostsKeys[i][1].id === payload.id){
                    try {
                        await firebase.database().ref('/posts/' + payload.arrOfPostsKeys[i][0]).remove()
                    } catch (e) {
                        commit('setError', e)
                        throw e
                    }
                }
            }
        }
    }
}


//
// return await firebase.database().ref('/posts/' + payload).remove().then(function () {
//     console.log("Remove succeeded.")
// })
//     .catch(function (error) {
//         console.log("Remove failed: " + error.message)
//     });