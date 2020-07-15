
// Este archivo es la definicion de servidor

const express = require('express')
const app     = express()

app.get('/', (request, response) => {
    response.json({
        success: true,
        msg    : 'Kodemia APIv8'
    })
})

module.exports = app