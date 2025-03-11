const {onRequest} = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest(
    (request, response) => {
        logger.info('Hello CGI', {structuredData: true})
        response.send('Hello CGI from Firebase!')
    }
)

exports.jsonRestExample = onRequest(
    (request, response) => {
        response.setHeader('Content-Type', 'application/json')
        response.send({
            status: 'OK',
            message: 'Hello CGI 2',
        })
    }
)

