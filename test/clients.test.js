const assert = require('assert');
const Clients = require('../lib/chatroom');

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
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
        assert.equal(c3.username, 'user3');
    });

    it('remove a client', () => {
        clients.remove(c1);
        assert(!clients.map.has(c1.username));
    });

    it('gets all clients', () => {
        const expectedClients = [c1, c2, c3];
        const allClients = clients.getAllClients();

        assert.deepEqual(allClients, expectedClients);
    });

    it('gets all clients except self', () => {
        const broadcastClients = clients.getBroadcastClients(c1);
        assert.deepEqual(broadcastClients, [c2, c3]);
    });

});
