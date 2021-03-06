## CONFIGURE SERVER

> Create folder `tickets-server`

> Generate `package.json`

	cd tickets-server
	npm init -y

> Dependencies

	npm install --save express
	npm install --save mysql2

> Ignore Git `.gitignore`
	
```
node_modules
dist
package-lock.json
```

> Entry point `index.js`

```js
// IMPORTS
const express = require('express')

// IMPORT MAIN SERVICES 
// const myService = require('./services/myService')

// IMPORT ROUTES
// const myApiRoute = require('./routes/myApi')

// MAIN APP
const app = express()

// CONFIGURE APP
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CONFIGURE ROUTES
// app.use('/api/myApi', myApiRouter)
// const myService = require('./services/myService')

// CONFIGURE SERVICES
// myService.init(config).catch(error => console.log(error) && process.exit())

// LISTEN SERVER
app.listen(5000, () => console.log('Server started at: http://localhost:5000/ (Press ctrl+c to stop)'))
```

