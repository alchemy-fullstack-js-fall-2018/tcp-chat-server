const assert = require('assert');
const ChatRoom = require('../lib/chat-room');

describe('Chatroom', () => {

    const c1 = {};
    const c2 = {};
    const c3 = {};
    let chatRoom = null;

    beforeEach(() => {
        chatRoom = new ChatRoom;
        chatRoom.add(c1);
        chatRoom.add(c2);
        chatRoom.add(c3);
    });

    it('assigns names to user objects', () => {
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
        assert.equal(c3.username, 'user3');
    });

    it('gets a client', () => {
        const client = chatRoom.getClient(c1.username);
        assert.deepEqual(client, c1);
    });

    it('it renames a user', () => {
        const client = c1.username;
        const newName = 'I-Love-ALC';
        const newusername = chatRoom.rename(client, newName);
        assert.equal(newusername, true);
        assert.equal(chatRoom.getClient(client), undefined);
        assert.ok(chatRoom.getClient(newName));
        assert.equal(chatRoom.getClient(newName).username, newName);
    });

    it('stores clients', () => {
        const allClients = chatRoom.all();
        assert.deepEqual(allClients, [c1, c2, c3]);
    });

    it('lists of client minus sender', () => {
        const broadcast = chatRoom.getBroadcastClients(c1);
        assert.deepEqual(broadcast, [c2, c3]);
    });

});
