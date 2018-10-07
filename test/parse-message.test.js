const assert = require('assert');
const parseMessage = require('../lib/parse-message');

describe('parseMessage', () => {
    
    it('only accepts messages that start with "@"', () => {
        assert.equal(parseMessage('ham is delicious'), null);
    });
});
