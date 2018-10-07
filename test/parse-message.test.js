const assert = require('assert');
const parseMessage = require('../lib/parse-message');

describe('parseMessage', () => {
    
    it('only accepts messages that start with "@"', () => {
        assert.equal(parseMessage('ham is delicious'), null);
    });

    it('returns the message as an object broken into parts', () => {
        const msg = '@command:parameter text';
        const expected = {
            cmd: 'command',
            arg: 'parameter',
            text: 'text'
        };
        assert.deepEqual(parseMessage(msg), expected);
    });

});
