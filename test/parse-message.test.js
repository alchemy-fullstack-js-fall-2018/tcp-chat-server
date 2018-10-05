const assert = require('assert');
const parseMessage = require('../lib/parse-message');

describe('parse message', () => {
    
    it('returns null if no "@" is supplied', () => {
        const failure = 'hello';
        assert.equal(parseMessage(failure), null);
    });

    it('returns an object', () => {
        const correct = '@all hello';
        const expected = {
            cmd: 'all',
            arg: undefined,
            text: 'hello'
        };
        assert.deepEqual(parseMessage(correct), expected);
    });

    it('handles @nick', () => {
        const correct = '@nick:coolguy';
        const expected = {
            cmd: 'nick',
            arg: 'coolguy',
            text: ''
        };
        assert.deepEqual(parseMessage(correct), expected);
    });

    it('handles @dm', () => {
        const correct = '@dm:coolguy what up bro?';
        const expected = {
            cmd: 'dm',
            arg: 'coolguy',
            text: 'what up bro?'
        };
        assert.deepEqual(parseMessage(correct), expected);
    });

});
