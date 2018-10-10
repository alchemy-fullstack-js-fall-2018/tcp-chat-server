const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
    it('returns null if @ isn\'t the first character', () => {
        assert.equal(parseMessage('hello world'), null);
    });

    it('returns an object with command, arg, and text when running something like: command:arg text', () => {
        assert.deepEqual(parseMessage('@nick:sarah'), {
            command: '@nick',
            arg: 'sarah',
            text: ''
        });

        assert.deepEqual(parseMessage('@dm:user2 Hi there'), {
            command: '@dm',
            arg: 'user2',
            text: 'Hi there'
        });
    });

    it('atAll works', () => {

    });
});
