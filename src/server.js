
// Este archivo es la definicion de servidor

const express      = require('express')
const app          = express()
const kodersRouter = require('./routes/koders.route')
const mentorRouter = require('./routes/mentors.route')
const authRouter   = require('./routes/auth.route')

app.use(express.json())

/**
 * moddleware a nivel de aplicación
 * app.use(function(request,response,next))
 */
// app.use((request, response, next) => {
//     console.log('Middleware de aplicación');
//     next();
// }), (request, response, next) => {
//     console.log('Middleware de aplicación');
//     next();
// }

/**
 * Montando router de koder
 */
app.use('/koders', kodersRouter)

/**
 * Montando router de mentor
 */
app.use('/mentors', mentorRouter)

/**
 * Montando router de auth
 */
app.use('/auth', authRouter)

// app.get('/', (request, response) => {
//     response.json({
//         success: true,
//         msg: 'Kodemia APIv8'
//     })
// })

module.exports = app