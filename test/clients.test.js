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

    it('assigns names', () => {
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
        assert.equal(c3.username, 'user3');        
    });

    it('will store all the clients', () => {
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c1, c2, c3]);
    });

    describe('getClient', () => {
        it('will return the same client object that was added', () => {
            const user1 = clients.getClient(c1.username);
            assert.deepEqual(user1, { 'username': 'user1' });            
        });        
    });

    
    describe('rename a client', () => {
        beforeEach(() => {
            clients.rename(c3.username, 'Scruggs');
        });

        it('will return true when the client has been updated', () => {
            const user2 = clients.getClient('user2');
            const renamed = clients.rename(user2.username, 'Hambone');
            assert.deepEqual(renamed, true);
        });

        it('will not return the client by its old name', () => {
            const user3 = clients.getClient('user3');
            assert.deepEqual(user3, null);
        });

        it('will not give a user a name already in use', () => {
            const user1 = clients.getClient('user1');
            const user3 = clients.getClient('Scruggs');
            const renamed = clients.rename(user1.username, user3.username);

            assert.equal(renamed, false);
            assert.deepEqual(user3.username, 'Scruggs');
            assert.deepEqual(user1.username, 'user1');
        });
    });

    it('removes a client', () => {
        clients.remove(c1.username);
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c2, c3]);
    });

    it('will give a list of clients other than the sender', () => {
        const broadcast = clients.getBroadcastClients(c3);
        assert.deepEqual(broadcast, [c1, c2]);
    });


});
