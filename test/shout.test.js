const assert = require('assert');
const processMessage = require('../lib/processMessage');

describe('shout message', () => {

    it('ignores strings that do not start with @', () => {
        const message = processMessage('hello');
        assert.equal(message, null);
    });
    it('est that a string returns an object', () => {
        const message = processMessage('@cmd:param some text');
        assert.deepEqual(message, { command: 'cmd', arg: 'param', text: 'some text' });
    });
});
