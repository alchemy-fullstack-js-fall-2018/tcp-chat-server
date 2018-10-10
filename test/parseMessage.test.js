const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {

    it('ignores strings that do not start with @', () => {
        assert.equal(parseMessage('hey'), null);
    });

});