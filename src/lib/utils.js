function iterateObject(object, callback) {
    for (let key in object) {
        // skip loop if the property is from prototype
        if (!object.hasOwnProperty(key)) continue
        callback(key, object[key], object)
    }
}

function orderObject(object) {
    const ordered = {}
    Object.keys(object).sort().forEach(function(key) {
        ordered[key] = object[key];
    })
    return ordered
}

module.exports = {
    iterateObject: iterateObject,
    orderObject: orderObject
}