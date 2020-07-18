
require('dotenv').config()

const dbConnect = require('./src/lib/db')
const server = require('./src/server')

dbConnect()
    .then(async () => {
        await server.listen(8081)
        console.log('server is listening');
    })
    .catch(err => {
        console.log(err);
    })