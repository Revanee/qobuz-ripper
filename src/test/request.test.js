const request = require('../lib/request')

test('generateQueryParameters generates correct query', () => {
    const params = [
        {
            key: 'Hello',
            value: 'World'
        },
        {
            key: 'Test',
            value: 'This'
        }
    ]
    const expected = 'Hello=World&Test=This'

    expect(request.generateQueryParameters(params)).toBe(expected)
})

test('generateUrl produces correct url', () => {
    expect(request.generateUrl('base', 'hello=world')).toBe('base?hello=world')
})