import { notify } from '@kyvg/vue3-notification'
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
        directors: state => state.movies.map(movie => movie.director).reduce((directors, director) => {
            if (!directors.some(other => other.director_id === director.director_id)) {
                directors.push(director)
            }
            return directors
        }, []),
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
        async getInfoMovie(store, movieId) {
            store.commit('setLock')

            notify('Obtiendo datos de la película')
            const movie = await movieApi.infoMovie(movieId)
            notify('La película es ' + movie.title)

            store.commit('setUnlock')
        },
        async getAllMovies(store) {
            if (store.state.lock) throw Error('Store is locked')

            store.commit('setLock')

            const movies = await movieApi.allMovies()

            store.commit('setMovies', movies)

            store.commit('setUnlock')
        }
    }
}