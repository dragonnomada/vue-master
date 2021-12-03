import movieApi from '../api/movieApi'

export default {
    // STATE (state)
    state: () => ({
        lock: false,
        movies: []
    }),
    // GETTERS (getters)
    getters: {
        hasMovies: state => state.movies.length > 0,
    },
    // MUTATIONS (commit)
    mutations: {
        setLock(state) {
            state.lock = true
        },
        setUnlock(state) {
            state.lock = false
        },
        setMovies(state, movies) {
            state.movies = movies
        }
    },
    // ACTIONS (dispatch)
    actions: {
        async getAllMovies(store) {
            if (store.state.lock) throw Error('Store is locked')

            store.commit('setLock')

            const movies = await movieApi.allMovies()

            store.commit('setMovies', movies)

            store.commit('setUnlock')
        }
    }
}