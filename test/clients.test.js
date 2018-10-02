const assert = require('assert');
const Clients = require('../lib/chatRoom');

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

    it('assigns names', () => {
        assert.equal(c1.userName, 'user1');
        assert.equal(c2.userName, 'user2');
        assert.equal(c3.userName, 'user3');
    });

    it('stores clients', () => {
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c1, c2, c3]);
    });
    
    it('removes a client', () => {
        clients.remove(c2);
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c1, c3]);

    });

    it('gives back list of clients (minus sender)', () => {
        const broadcast = clients.getBroadcastClients(c1);
        assert.deepEqual(broadcast, [c2, c3]);
    });

    it('rename works properly', () => {
        const clients = new Clients();
        const c1 = {};
        clients.add(c1);
        newUserName = 'bob';
        const result = clients.rename(c1.userName, newUserName);
        assert.ok(result);
        assert.equal(c1.userName, newUserName);
    });

});
