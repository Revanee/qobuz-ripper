const generator = require('../../lib/web/generator')

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

    expect(generator.generateQueryParameters(params)).toBe(expected)
})

test('generateUrl produces correct url', () => {
    expect(generator.generateUrl('base', 'hello=world')).toBe('base?hello=world')
})

test('Generated signature is correct', () => {
    expectedSignature = 'e6d57b97a24be62be88e725e51a23a38'

    expect(generator.createSignature(
        'track',
        'getFileUrl',
        {
            'format_id': '6',
            'intent': 'stream',
            'track_id': '59754717'
        },
        '1555671409',
        '421125438'
    )).toBe(expectedSignature)
})
