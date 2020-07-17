
// Este archivo es la definicion de servidor

const express = require('express')
const app = express()
const kodersRouter = require('./routes/koders.route')
const mentorRouter = require('./routes/mentors.route')

app.use(express.json())

/**
 * Montando router de koder
 */
app.use('/koders', kodersRouter)

/**
 * Montando router de mentor
 */
app.use('/mentors', mentorRouter)

// app.get('/', (request, response) => {
//     response.json({
//         success: true,
//         msg: 'Kodemia APIv8'
//     })
// })

module.exports = app