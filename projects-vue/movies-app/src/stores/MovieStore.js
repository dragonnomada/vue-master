import movieApi from '../api/movieApi'

export default {
    namespaced: true, // El store sea independiente de los otros
    // STATE (state)
    state: () => ({
        lock: false,
        movies: [],
    }),
    // GETTERS (getters)
    getters: {
        hasMovies: state => state.movies.length > 0,
        directors: state => state.movies.map(movie => movie.director),
        years: state => [... new Set(state.movies.map(movie => movie.realase_year))],
        contries: state => [... new Set(state.movies.map(movie => movie.country))],
        moviesInYear: state => state.movies.filter(movie => movie.realase_year === new Date().getFullYear())
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