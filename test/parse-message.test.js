const assert = require('assert');
const parseMessage = require('../lib/parse-message');

describe('parse message', () => {
    const failure = 'hello';
    it('returns null if no "@" is supplied', () => {
        assert.equal(parseMessage(failure), null);
    });

});
