const assert = require('assert');
const Clients = require('../lib/chat-room');

describe('clients', () => {
    
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
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
        assert.equal(c3.username, 'user3');
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
    
    it('renames a client', () => {
        const rename = clients.renameClient(c1);
        assert.deepEqual(rename, c1.username)
    });
});
