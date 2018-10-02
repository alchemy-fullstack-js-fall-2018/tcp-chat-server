const assert = require('assert');
const parseMessage = require('../lib/parse-message');

describe('parse message', () => {
    const failure = 'hello';
    const correct = '@all hello';
    const expected = {
        cmd: 'all',
        arg: undefined,
        text: 'hello'
    };
    it('returns null if no "@" is supplied', () => {
        assert.equal(parseMessage(failure), null);
    });

    it('returns an object', () => {
        assert.deepEqual(parseMessage(correct), expected);
    });

});
