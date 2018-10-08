const assert = require('assert');
const processMessage = require('../lib/processMessage');

describe('shout message', () => {

    it('ignores chat commands that do not start with: @', () => {

        let response = processMessage('Hey whats yous guys doings here?');
        assert.equal(response, null);
    });
});
