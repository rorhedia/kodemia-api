

function getRequestInfo(request, response, next) {

    if (request.method == 'GET') {
        console.log(`${request.method} ${request.baseUrl}`);
    } else {
        const body = JSON.stringify(request.body)
        console.log(`${request.method} ${request.baseUrl} - ${body}`);
    }

    next()
}

module.exports = getRequestInfo