
// endpoint
// metodo +  ruta
// GET http://ruta.com/api

const mongoose = require('mongoose')

module.exports = () => mongoose.connect(
    'mongodb+srv://rorhedia:rorhedia12345@first-cluster.uw3ol.mongodb.net/kodemia',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
