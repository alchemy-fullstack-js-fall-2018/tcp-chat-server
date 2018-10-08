const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('parse messages', () => {

    it('only accepts messages that start with "@"', () => {
        assert.equal(parseMessage('hello world'), null);
    });

    it('returns an object with no arg for @all', () => {
        const result = parseMessage('@all hello world');
        const expected = {
            command: 'all',
            username: '',
            text: 'hello world'
        };
        assert.deepEqual(result, expected);
    });

    it('returns a complete object for @dm', () => {
        const result = parseMessage('@dm:exampleUser Hello this is a direct message!');
        const expected = {
            command: 'dm',
            username: 'exampleUser',
            text: 'Hello this is a direct message!'
        };
        assert.deepEqual(result, expected);
    });

    it('returns an object with no text for @nick', () => {
        const result = parseMessage('@nick:exampleUser');
        const expected = {
            command: 'nick',
            username: 'exampleUser',
            text: ''
        };
        assert.deepEqual(result, expected);
    });
    
});
