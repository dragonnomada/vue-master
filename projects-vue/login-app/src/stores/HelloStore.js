import helloApi from "../api/helloApi"

export default {
    namespaced: true,
    state: () => ({
        date: null,
        hash: null,
        count: null,
        error: null
    }),
    getters: {
        date(state) {
            return state.date
        },
        hash(state) {
            return state.hash
        },
        count(state) {
            return state.count
        },
    },
    mutations: {
        setError(state, error) {
            state.date = null
            state.hash = null
            state.count = null
            state.error = `${error}`
        },
        setData(state, { date, hash, count }) {
            state.date = date
            state.hash = hash
            state.count = count
            state.error = null
        }
    },
    actions: {
        async fetchData(helloStore) {
            const isLogin = helloStore.rootGetters['LoginStore/isLogin']

            if (!isLogin) {
                helloStore.commit('setError', 'Invalid Login')
                return
            }

            const username = helloStore.rootGetters['LoginStore/username']
            const deviceId = helloStore.rootGetters['LoginStore/deviceId']
            const token = helloStore.rootGetters['LoginStore/token']

            const credentials = {
                username,
                deviceId,
                token
            }

            try {
                const { date, count, hash } = await helloApi.getData(credentials)
                helloStore.commit('setData', { date, count, hash })
            } catch (error) {
                helloStore.commit('setError', error)
            }
        }
    }
}