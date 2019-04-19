const utils = require('../lib/utils');

test('iterateObject iterates every element', () => {
  const object = {
      key1: 1,
      key2: 1,
      key3: 1
  }

  let sum = 0
  utils.iterateObject(object, (key, value) => sum += value)

  expect(sum).toBe(3)
})

test('orderObject returns an object ordered by key', () => {
    const object = {
        key1: 1,
        key3: 1,
        key2: 1
    }
    const orderedObject = {
        key1: 1,
        key2: 1,
        key3: 1
    }

    expect(
        JSON.stringify(
            utils.orderObject(object))
    ).toBe(JSON.stringify(orderedObject))
})