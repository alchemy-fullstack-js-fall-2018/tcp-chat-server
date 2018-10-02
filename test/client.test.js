const assert = require('assert');
const Clients = require('./lib/client');

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

    it('assigns a user name', () => {
        assert.equal(c1.clients, 'user1');
        assert.equal(c1.clients, 'user2');
        assert.equal(c1.clients, 'user3');
    });

    it('stores a client', () => {
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c1, c2, c3]);
    });

    it('removes a client', () => {
        clients.remove(c1);
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c2, c3]);

    });

    it('gives back list of clients (minus sender)', () => {
        const broadcast = clients.getBroadcastClients(c1);
        assert.deepEqual(broadcast, [c2, c3]);
    });
});
