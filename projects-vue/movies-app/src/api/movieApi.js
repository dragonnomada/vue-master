let baseUrl = 'http://localhost:5000'

export async function init({ url }) {
    baseUrl = url
}

export async function allMovies() {
    const response = await fetch(`${baseUrl}/api/movies/`) // GET /

    if (response.status !== 200) {
        const error = await response.text()
        throw new Error(error)
    }

    const movies = await response.json()

    return movies
}

export async function infoMovie(movieId) {
    const response = await fetch(`${baseUrl}/api/movies/${movieId}`) // GET /:movieId

    if (response.status !== 200) {
        const error = await response.text()
        throw new Error(error)
    }

    const movie = await response.json()

    return movie
}

export async function directorByMovie(movieId) {
    const response = await fetch(`${baseUrl}/api/movies/${movieId}/director`) // GET /:movieId/director

    if (response.status !== 200) {
        const error = await response.text()
        throw new Error(error)
    }

    const director = await response.json()

    return director
}

export async function addMovie(movie, directorId) {
    const response = await fetch(`${baseUrl}/api/movies/add`, { // PUT /add
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...movie, directorId })
    })

    if (response.status !== 200) {
        const error = await response.text()
        throw new Error(error)
    }

    const result = await response.json()

    return result
}