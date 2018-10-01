const assert = require('assert');
const Clients = require('../lib/clients');

describe('Clients', () => {
    let clients = null;
    beforeEach(() => {
        clients = new Clients();
    });

    it('assigns names', () => {
        const c1 = clients.add({});
        const c2 = clients.add({});
        const c3 = clients.add({});

        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
        assert.equal(c3.username, 'user3');
    });

    it('remove a client', () => {
        const c1 = clients.add({});
        clients.remove(c1);

        assert(!clients.set.has(c1));
    });

    it('gets all clients', () => {
        const c1 = clients.add({});
        const c2 = clients.add({});
        const c3 = clients.add({});

        const allClients = clients.getAll();

        assert.equal(allClients.length, 3);
    });
});
