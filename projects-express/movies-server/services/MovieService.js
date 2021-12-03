const mysql = require('mysql2/promise')

let connection = null

// init({ dbConfig, ... })
async function init({ dbConfig }) {
    connection = await mysql.createConnection(dbConfig)
}

async function getMovies() {
    const sql = 'select * from movies'

    const params = []

    const [rows] = await connection.execute(sql, params)

    const movies = rows

    return movies
}

async function getMovieById(movieId) {
    const sql = 'select * from movies where movie_id = ? limit 1'

    const params = [movieId]

    const [rows] = await connection.execute(sql, params)

    if (rows.length === 0) throw new Error(`[MYSQL EID-001] Invalid Movie Id`)

    const [movie] = rows // const movie = rows[0]

    return movie
}

async function addMovie({ title, description, year, score, country, directorId }) {
    const director = await getDirectorById(directorId)

    const sql = `
        insert into movies (title, descrip, realase_year, imdb_score, country) 
            values (?, ?, ?, ?, ?)
    `

    const params = [title, description, year, score, country]

    const [result] = await connection.execute(sql, params)

    const { insertId } = result

    const movieId = insertId

    addDirectorMovie(director.director_id, movieId)

    const movie = await getMovieById(movieId)

    return {
        movie,
        director
    }
}

async function getDirectorByMovieId(movieId) {
    const sql = 'select director_id from director_movies where movie_id = ? limit 1'

    const params = [movieId]

    const [rows] = await connection.execute(sql, params)

    const [first] = rows

    if (!first) throw new Error('[CODE XX] Director Not Found')

    const director = await getDirectorById(first.director_id)

    return director
}

async function getDirectorById(directorId) {
    const sql = 'select * from directors where director_id = ? limit 1'

    const params = [directorId]

    const [rows] = await connection.execute(sql, params)

    if (rows.length === 0) throw new Error(`[MYSQL EID-002] Invalid Director Id`)

    const [director] = rows // const movie = rows[0]

    return director
}

module.exports = {
    init,
    getMovies,
    getMovieById,
    addMovie,
    getDirectorByMovieId,
    getDirectorById
}