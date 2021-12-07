export async function getData(credentials) {
    const query = `username=${credentials.username}&deviceId=${credentials.deviceId}&token=${credentials.token}`

    const url = `${process.env.VUE_APP_SERVER_URL}/api/hello?${query}`

    const response = await fetch(url)

    if (response.status !== 200) {
        const error = await response.text()
        throw new Error(error)
    }

    return await response.json() // { date, hash, count }
}

export default {
    getData
}