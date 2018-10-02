const assert = require('assert');
const Clients = require('../lib/clients');

describe('Clients', () => {

    const c1 = {};
    const c2 = {};
    const c3 = {};
    let clients = null;

    beforeEach(() => {

        clients = new Clients();
        clients.add(c1);
        clients.add(c2);
        clients.add(c3);
    });
    
    it('with "add" method, name is returned as username property of client', () => {
        
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
        assert.equal(c3.username, 'user3');
    });

    it('with "getClient" method, returned object is the same as what was added', () => {

        const user1 = clients.getClient(c1.username);
        const user2 = clients.getClient(c2.username);
        const user3 = clients.getClient(c3.username);

        assert.deepEqual(user1, { 'username': 'user1' });
        assert.deepEqual(user2, { 'username': 'user2' });
        assert.deepEqual(user3, { 'username': 'user3' });
    });
});
