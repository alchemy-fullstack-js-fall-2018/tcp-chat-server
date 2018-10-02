const assert = require('assert');
const parseMessage = require('../lib/parseMessage');


describe('parseMessage', () => {
    
    it('ignores strings that do not start with "@"', () => {
        assert.equal(parseMessage('howdy!'), null);
    });

    it('takes a command, parameter, and text and return appropriate object', () => {
        const message = parseMessage('@cmd:param some text');
        assert.deepEqual(message, { command: 'cmd', arg: 'param', text: 'some text' });
    });
});
