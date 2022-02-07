import {createStore} from 'vuex'

const store = createStore({
    state: {
        asideVisible: true,
    },
    mutations: {
        changeAsideVisible(state) {
            state.asideVisible = !state.asideVisible
        }
    }
})

export default store

