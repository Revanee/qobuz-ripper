const request = require('request')
const signature = require('./signature')
const utils = require('../utils')

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

function generateTrackRequestOptions(trackId, timestamp, conf) {
    const method = 'getFileUrl'
    const object = 'track'
    const parameters = {
        track_id: trackId,
        format_id: '6',
        intent: 'stream'
    }
    const sig = signature.createSignature(object, method, parameters, timestamp, conf.secret)
    console.log('Signature: ' + sig)
    parameters.request_ts = timestamp
    parameters.request_sig = sig
    const allParameters = utils.objectToArray(parameters)
    const query = generateQueryParameters(allParameters)
    const url = generateUrl(conf.trackURL, query)
    return {
        url: url,
        method: "GET",
        headers: {
            'X-App-Id': conf.appId,
            'X-User-Auth-Token': conf.token
        }
    }
}

module.exports = {
    generateQueryParameters: generateQueryParameters,
    generateUrl: generateUrl,
    generateTrackRequestOptions: generateTrackRequestOptions
}