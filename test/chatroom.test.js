const assert = require('assert');
const ChatRoom = require('../lib/chatroom');

describe('chatroom?', () => {

    const c1 = {};
    const c2 = {};
    let clients = null;

    beforeEach(() => {
        clients = new ChatRoom();
        clients.add(c1);
        clients.add(c2);
    });

    it('assigns random user name', () => {
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
    });

    it('stores clients', () => {
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c1, c2]);
    });

    it('renames a user', () => {
        const client = clients.rename('user1', 'claire');
        assert.equal(client.username, 'claire');
    });

    // it('new username returns client', () => {
        
    // })
});