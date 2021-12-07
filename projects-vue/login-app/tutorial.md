# Tutorial

## 1. Ofuscación

[https://www.npmjs.com/package/webpack-javascript-obfuscator-plugin](https://www.npmjs.com/package/webpack-javascript-obfuscator-plugin)

> Instalar el plugin de ofuscación para webpack

    npm install --save-dev webpack-javascript-obfuscator-plugin

## 2. Configurar el plugin de ofuscación

> Crear el archivo de configuración de Vue para Webpack `vue.config.js`

```js
const WebpackJavascriptObfuscatorPlugin = require('webpack-javascript-obfuscator-plugin')

console.log('Configuring Vue & Webpack...')

module.exports = {
    configureWebpack: {
        plugins: [
            new WebpackJavascriptObfuscatorPlugin({
                compact: true,
                deadCodeInjection: true,
            })
        ]
    }
}
```

## 3. Verificar que el código compilado esté ofuscado

> Compilar el proyecto

    npm run build

> Inicializar el servidor productivo

    npm install -g serve

    cd dist

    serve