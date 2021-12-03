const express = require('express')

const MovieService = require('../services/MovieService')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const movies = await MovieService.getMovies()
        response.status(200).json(movies)
    } catch (error) {
        response.status(500).send(error.toString())
    }
})

router.get('/:movieId', async (request, response) => {
    const { movieId } = request.params

    try {
        const movie = await MovieService.getMovieById(movieId)
        response.status(200).json(movie)
    } catch (error) {
        response.status(500).send(error.toString())
    }
})

router.get('/:movieId/director', async (request, response) => {
    const { movieId } = request.params

    try {
        const director = await MovieService.getDirectorByMovieId(movieId)
        response.status(200).json(director)
    } catch (error) {
        response.status(500).send(error.toString())
    }
})

router.put('/add', async (request, response) => {
    const { title, description, country, score, year, directorId } = request.body

    if (typeof title !== "string" || /^[\s\t\n]+$/.test(title)) {
        response.status(500).send('[U001] Invalid Title')
    }

    if (typeof country !== "string" || country.length > 20) {
        response.status(500).send('[U002] Invalid Country')
        return
    }
    
    try {
        const result = await MovieService.addMovie({ 
            title, 
            description, 
            country, 
            score, 
            year, 
            directorId 
        })
        response.status(200).json(result)
    } catch (error) {
        response.status(500).send(error.toString())
    }
})

module.exports = router