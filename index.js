
const dbConnect = require('./src/lib/db')
const server = require('./src/server')



dbConnect()
    .then(() => {
        console.log('Connected');

        server.listen(8080, () => {
            console.log('server is listening');
        })

    })
    .catch(err => {
        console.log(err);
    })