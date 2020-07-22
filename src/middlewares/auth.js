
const jwt   = require('../lib/jwt')
const Koder = require('../models/koders.model')

async function auth(request, response, next) {
    // TODAS LAS LLAMADAS DEBERIAN TENER UN Header Authorization con un token válido

    try {
        const { authorization } = request.headers
        const decodedToken      = jwt.verify(authorization)
        // console.log(decodedToken,decodedToken.id);
        const koder             = await Koder.findById(decodedToken.id)
        // console.log(koder);
              request.koder     = koder
        next()
    } catch (error) {
        response.json({
            success: false,
            error  : error.message
        })
    }
}

module.exports = auth