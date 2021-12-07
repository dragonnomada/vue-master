import loginApi from "../api/loginApi"

export default {
    namespaced: true,
    state: () => ({
        isLogin: false,
        username: null,
        deviceId: null,
        token: null,
        error: null
    }),
    getters: {
        isLogin(state) {
            return state.isLogin
        },
        username(state) {
            return state.username
        },
        deviceId(state) {
            return state.deviceId
        },
        token(state) {
            return state.token
        },
    },
    mutations: {
        setError(state, error) {
            state.username = null
            state.deviceId = null
            state.token = null
            state.isLogin = false
            state.error = `${error}`
        },
        setLogin(state, { username, deviceId, token }) {
            state.username = username
            state.deviceId = deviceId
            state.token = token
            state.isLogin = true
            state.error = null
        }
    },
    actions: {
        async signIn(loginStore, { username, password }) {
            try {
                const { deviceId, token } = await loginApi.signIn(username, password)
                loginStore.commit('setLogin', { username, deviceId, token })
            } catch (error) {
                loginStore.commit('setError', error)
            }
        }
    }
}