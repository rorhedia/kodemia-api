
// endpoint
// metodo +  ruta
// GET http://ruta.com/api

const mongoose = require('mongoose')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

module.exports = () => mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
