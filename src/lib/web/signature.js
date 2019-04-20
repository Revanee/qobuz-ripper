utils = require('../utils')
md5 = require('js-md5')

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

module.exports = {
    createSignature: createSignature
}