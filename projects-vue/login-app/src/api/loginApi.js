export async function signIn(username, password) {
    const url = `${process.env.VUE_APP_SERVER_URL}/login`

    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
            deviceId: 'abc123'
        })
    })

    if (response.status !== 200) {
        const error = await response.text()
        throw new Error(error)
    }

    return await response.json() // { username, token }
}

export default {
    signIn
}