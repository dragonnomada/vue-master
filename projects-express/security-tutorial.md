# Server Security Tutorial - Using JWT (JSON WEB TOKENS)

## Introducción

* JWT son tokens (cadenas de caracteres que contienen información cifrada en el servidor)
* Los JWT se pueden firmar con la llave Privada | SERVER
* Los JWT sólo se pueden descifrar con la llave Pública (generada de la llave privada) | SERVER
* Los Tokens pueden ser almacenados del lado del cliente de forma segura
* Los Tokens contienen información (payload) que el servidor puede recuperar, pero para el cliente están cifrados
* El payload sirve para retener datos, como el usuario o usuarios que pueden usar el token, la fecha de creación y expiración, etc.
* Podemos generar con esto arquitecturas dónde los clientes (apps) recuerden su número de dispositivo (aleatorio) y lo guarden en caché para generar tokens ligados a ese dispositivo.
* Podemos separar al servidor que autentica (valida / genera el token) del servidor de consumo (recursos / valida el token)

## Paso a Paso

> 1. Generar un conjunto de claves privada/pública

    openssl genrsa -out private.key 4096

    openssl rsa -in private.key -out public.pem -pubout -outform PEM

> 2. Generar el token con su payload

```js
const payload = {
    provider: 'Foo Inc - Security System',
    username,
    deviceId,
    createAt: new Date()
}

const privateKey = await getPrivateKey()

const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' })
```

> 3. Validar el token

```js
const publicKey = await getPublicKey()

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
```

## Establcer un middleware de seguridad

> Crear un middleware intermedio entre las rutas `/api` para que sean validadas

```js
module.exports = async (request, response, next) => {
    // Obtener el token de la petición
    const { username, deviceId, token } = request.query

    const isValid = await LoginService.verifyToken(username, deviceId, token)

    if (!isValid) {
        // Rechazamos la petición hacia cualquier /api/**
        response.status(401).send('Unathorized: Invalid username / token')
        return
    }

    // Podemos personalizar datos hacia la siguiente ruta
    request.auth = {
        username,
        deviceId,
        token,
        isValid: true
    }

    // Consumimos la petición hacia la ruta siguiente /api/**
    next()
}
```

> Usar el middleware para interceptar rutas antes de ser consumidas

```js
// Interceptamos todas las rutas que comiencen con `/api`
app.use('/api', secureMiddleware)

// Estas rutas ya serían seguras
app.use('/api/hello', helloRouter)
```
