const signature = require('../../lib/web/signature')

test('Generated signature is correct', () => {
    expectedSignature = 'e6d57b97a24be62be88e725e51a23a38'

    expect(signature.createSignature(
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
