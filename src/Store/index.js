import {createStore} from 'vuex'

export const store = createStore({
    state: {
        asideVisible: true,
    },
    mutations: {
        changeAsideVisible(state) {
            state.asideVisible = !state.asideVisible
        }
    }
})


