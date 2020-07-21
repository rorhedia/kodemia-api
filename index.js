
require('dotenv').config()

const dbConnect = require('./src/lib/db')
const server    = require('./src/server')

dbConnect()
    .then(async () => {
        await server.listen(8080)
        console.log('server is listening');
    })
    .catch(err => {
        console.log(err);
    })