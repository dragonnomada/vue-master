# CONFIGURE ROUTES

> Import express `const express = require('express')`

> Create router `const router = express.Router()`

> Define routes `router.<method>(<path>, ...[<middleware>], <handler>)`

```js
router.post('/<path>', async (request, response) => {
  const payload = request.body // (<headers>) // request.query (<url>) // request.params (<path>)

  // TODO: Validate data and types

  const result = await SomeService.doSomething(payload)

  response.send(result)
})
```

Method | Use | Description
--- | --- | ---
`GET` | Search & Get Data | Is most common using (work in public with tokens)
`POST` | Get Data / Insert / Update / Upload | Is most common using (work in private with credentials)
`PUT` | Insert | Restful - Add new elements
`PATCH` | Update | Restful - Update existing elements
`DELETE` | Delete / Remove / Inactive | Result - Removes/Desactivate elements 

> Export router `module.exports = router`