const request = require('request')
const signature = require('./signature')

function generateQueryParameters(parameters) {
    return parameters
        .map(parameter => {
            return {
                key:    encodeURIComponent(parameter.key),
                value:  encodeURIComponent(parameter.value)
            }
        })
        .map(parameter => parameter.key + '=' + parameter.value)
        .join('&')
}

function generateUrl(location, query) {
    return location + '?' + query
}

module.exports = {
    generateQueryParameters: generateQueryParameters,
    generateUrl: generateUrl
}