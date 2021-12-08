const express = require('express')

const router = express.Router()

router.get('/secret', (request, response) => {
    response.status(200).json({
        secret: 'CONTRASEÑA'
    })
})

module.exports = router