const jwt = require('jsonwebtoken')

const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)

async function signIn(username, password) {
    // TODO: Verificar si es un usuario válido en base de datos
    if (username === 'batman' && password === 'robin') {
        return true
    }
    return false
}

async function getPrivateKey() {
    const privateKey = await readFile(path.join(process.cwd(), 'certs', 'private.key'))
    return privateKey
}

async function getPublicKey() {
    const publicKey = await readFile(path.join(process.cwd(), 'certs', 'public.pem'))
    return publicKey
}

async function generateToken(username, deviceId) {
    const payload = {
        provider: 'Foo Inc - Security System',
        username,
        deviceId,
        createAt: new Date()
    }

    const privateKey = await getPrivateKey()

    const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' })

    return token
}

async function verifyToken(username, deviceId, token) {
    const publicKey = await getPublicKey()

    return new Promise((resolve, reject) => {
        jwt.verify(token, publicKey, (error, payload) => {
            if (error) {
                resolve(false)
                return
            }
            if (payload.username !== username) {
                resolve(false)
                return
            }
            if (payload.deviceId !== deviceId) {
                resolve(false)
                return
            }
            resolve(true)
        })
    })
}

module.exports = {
    signIn,
    generateToken,
    verifyToken
}