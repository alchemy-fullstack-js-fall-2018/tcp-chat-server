const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
    it('returns the message if @ isn\'t the first character', () => {
        assert.equal(parseMessage('hello world'), 'hello world');
    });
});
