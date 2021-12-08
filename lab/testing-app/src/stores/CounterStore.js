export const createState = () => ({
    count: 0
})

export const getters = {
    count: state => state.count
}

export const mutations = {
    increment: (state) => {
        state.count++
    },
    decrement: (state) => {
        state.count--
    },
    reset: (state) => {
        state.count = createState().count
    }
}

export const actions = {
    increment: (localStore) => {
        localStore.commit('increment')
    },
    decrement: (localStore) => {
        localStore.commit('decrement')
    },
    reset: (localStore) => {
        localStore.commit('reset')
    },
}

export default {
    namespaced: true,
    state: createState,
    getters,
    mutations,
    actions
}