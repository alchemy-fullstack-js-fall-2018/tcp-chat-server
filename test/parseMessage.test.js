const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
    it('returns the message if @ isn\'t the first character', () => {
        assert.equal(parseMessage('hello world'), 'hello world');
    });
    it('returns an object with command, arg, and text when running something like: command:arg text', () => {
        assert.deepEqual(parseMessage('@nick:sarah I am changing my name'), {
            command: '@nick',
            arg: 'sarah',
            text: 'I am changing my name'
        });
    });
});
