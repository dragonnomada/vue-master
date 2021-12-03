<template>
    <div>
        <h1>Movies App</h1>
        <div v-for="movie in movies" v-bind:key="movie.movie_id">
            <a v-bind:href="'#movie=' + movie.movie_id">{{ movie.title }}</a>
            <button v-bind:disabled="lock" v-on:click="getMovieInfo(movie)">get info</button>
        </div>
        <hr >
        <div v-for="director in directors" v-bind:key="director.director_id">
            <a v-bind:href="'#director=' + director.director_id">{{ director.fullname }}</a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        movies() {
            return this.$store.state.MovieStore.movies
        },
        directors() {
            console.log(this.$store.getters);
            return this.$store.getters['MovieStore/directors']
        },
        lock() {
            return this.$store.state.MovieStore.lock
        }
    },
    methods: {
        getMovieInfo(movie) {
            this.$store.dispatch('MovieStore/getInfoMovie', movie.movie_id)
        }
    },
}
</script>

