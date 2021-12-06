# Configurar un Servidor Productivo

## 1. Configurar las variables de entorno

> Crear el archivo `.env`

```
FOO=123
BAR=456

PORT=4000
HOST=localhost
```

> Registrar las variables de entorno en el archivo `index.js`

```js
const path = require('path')

require('dotenv').config({ path: path.join(process.cwd(), '.env') })

// process.env.FOO -> "123"
// process.env.BAR -> "456"
// process.env.PORT -> "4000"
// process.env.HOST -> "localhost"
```

## 2. Levantar el servidor con las variables de entorno

> Ejecutar el comando para levantar el server

    node .

    npm run serve

## 3. Compilar a productivo

> Configurar el `package.json`

```json
{
    ...
    "bin": "index.js",
    "pkg": {
        "targets": [ "node16-win-x64", "node16-linux-x64" ],
        "outputPath": "dist"
    }
}
```

> Ejecutar el comando para compilar el server

    pkg .

    npm run build

## Nota: Crear scripts de pre-procesamiento

> Crear el script para la plataforma (windows | unix) `myscript.cmd`

```
@rem This is my script

call node .

call pkg .

call rm somefile.cache.js

call <some command>
```

> Registrar el script en el `package.json`

```json
{
    ...
    "scripts": {
        "myscript": "myscript.cmd"
    }
}
```

* **Nota:** Pueden ejecutar ahora su script con `npm run myscript`

## Nota: Instalar las dependencias

> Dependencias comunes en un servidor de express

    npm install --save dotenv
    npm install --save cors
    npm install --save express

> Dependencias para compilar con PKG

    npm install -g pkg

> Dependencias para ofuscar código

    npm install --save-dev javascript-obfuscator

## Nota: Comandos útiles

> Ofuscar una carpeta de servicios

    npx javascript-obfuscator services.source --output services --compact true

