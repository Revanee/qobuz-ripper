const utils = require('../utils')
const md5 = require('js-md5')


function createSignature(obj, method, params, timestamp, secret) {
    const orderedParams = utils.orderObject(params)

    let paramsString = ''
    utils.iterateObject(orderedParams, (key, value) => paramsString += key + value)

    let signatureString =
        obj +
        method +
        paramsString +
        timestamp +
        secret

    signature = md5(signatureString)

    return signature;
}

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

function generateTrackRequestParameters(trackId, timestamp, secret) {
    const method = 'getFileUrl'
    const object = 'track'
    const parameters = {
        track_id: trackId,
        format_id: '6',
        intent: 'stream'
    }
    const signature = createSignature(object, method, parameters, timestamp, secret)
    parameters.request_ts = timestamp
    parameters.request_sig = signature
    return parameters
}

module.exports = {
    generateQueryParameters: generateQueryParameters,
    generateUrl: generateUrl,
    generateTrackRequestParameters: generateTrackRequestParameters,
    createSignature: createSignature
}
