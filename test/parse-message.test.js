const assert = require('assert');
const parseMessage = require('../lib/parse-message.js');

describe('parse message', () => {

    it('returns null when passed a string that does not start with @', () => {
        const result = parseMessage('all hello world!');
        const expected = null;
        assert.equal(result, expected);
    });

    it('returns an object with no arg for @all', () => {
        const result = parseMessage('@all hello world');
        const expected = {
            command: 'all',
            arg: '',
            text: 'hello world'
        };
        assert.deepEqual(result, expected);
    });

    it('returns a complete object for @dm', () => {
        const result = parseMessage('@dm:exampleUser Hello this is a direct message!');
        const expected = {
            command: 'dm',
            arg: 'exampleUser',
            text: 'Hello this is a direct message!'
        };
        assert.deepEqual(result, expected);
    });

    it('returns an object with no text for @nick', () => {
        const result = parseMessage('@nick:exampleUser');
        const expected = {
            command: 'nick',
            arg: 'exampleUser',
            text: ''
        };
        assert.deepEqual(result, expected);
    });

});