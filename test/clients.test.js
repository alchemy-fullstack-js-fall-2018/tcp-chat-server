const assert = require('assert');
const ChatRoom = require('../lib/clients');

describe('Clients', () => {

    const c1 = {};
    const c2 = {};
    const c3 = {};
    let clients = null;

    beforeEach(() => {

        clients = new ChatRoom();
        clients.add(c1);
        clients.add(c2);
        clients.add(c3);
    });

    describe('add', () => {

        it('with "add" method, name is returned as username property of client', () => {
            
            assert.equal(c1.username, 'user1');
            assert.equal(c2.username, 'user2');
            assert.equal(c3.username, 'user3');
        });
    });
    
    describe('getClient', () => {

        it('returned object is the same as what was added', () => {
    
            const user1 = clients.getClient(c1.username);
            const user2 = clients.getClient(c2.username);
            const user3 = clients.getClient(c3.username);
    
            assert.deepEqual(user1, { 'username': 'user1' });
            assert.deepEqual(user2, { 'username': 'user2' });
            assert.deepEqual(user3, { 'username': 'user3' });
        });
    });

    describe('rename', () => {
        beforeEach(() => {
            clients.rename(c1.username, 'Mr. Snuggles');
            clients.rename(c2.username, 'Peluche');
        });

        it('returns "true"', () => {
            const user3 = clients.getClient('user3');
            const renamed = clients.rename(user3.username, 'Banana');
            assert.deepEqual(renamed, true);
        });

        it('using old name does NOT return the client', () => {   
            const user1 = clients.getClient('user1');
            assert.deepEqual(user1, null);
        });

        it('using new name does return the client', () => {
            const user1 = clients.getClient('Mr. Snuggles');
            assert.deepEqual(user1, { 'username': 'Mr. Snuggles' });
        });

        it('property on clients object changed', () => {
            const user1 = clients.getClient('Mr. Snuggles');
            assert.deepEqual(user1.username, 'Mr. Snuggles');
        });

        it('canNOT rename a user to an existing username', () => {
            const user1 = clients.getClient('Mr. Snuggles');
            const user3 = clients.getClient('user3');
            const renamed = clients.rename(user3.username, user1.username);

            assert.equal(renamed, false);
            assert.deepEqual(user1.username, 'Mr. Snuggles');
            assert.deepEqual(user3.username, 'user3');
        });
    });

    describe('all', () => {
        it('returns an array of all clients', () => {
            const allUsers = clients.all();

            assert.deepEqual(allUsers, [
                { 'username': 'user1' }, 
                { 'username': 'user2' }, 
                { 'username': 'user3' }
            ]);
        });
    });

    describe('getBroadcastClients', () => {

        it('gives back list of clients less the sender', () => {
            const broadcast = clients.getBroadcastClients(c1);

            assert.deepEqual(broadcast, [
                { 'username': 'user2' },
                { 'username': 'user3' }
            ]);
        });
    });
});
