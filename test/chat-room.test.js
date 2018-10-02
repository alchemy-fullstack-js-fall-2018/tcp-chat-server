const assert = require('assert');
const ChatRoom = require('../lib/chat-room.js');

describe('chat room', () => {

    it('takes a socket, assigns user name, and stores by user name', () => {
        const chatRoom = new ChatRoom();
        const client = {};
        const userName = chatRoom.add(client);
        assert.equal (client.userName, 'user1');
        const returnedClient = chatRoom.getClient(userName);
        assert.deepEqual(returnedClient, client);        
    });

    it('rename works properly', () => {
        const chatRoom = new ChatRoom();
        const client = {};
        const userName = chatRoom.add(client);
        const result = chatRoom.rename(userName, 'newUserName');
        assert.ok(result);
        const returnedClient = chatRoom.getClient(userName);
        assert.equal(returnedClient, undefined);
        assert.equal(client.userName, 'newUserName');
    });

    it('can not rename to existing user name', () => {
        const chatRoom = new ChatRoom();
        const client1 = {}, client2 = {};
        const userName1 = chatRoom.add(client1);
        const userName2 = chatRoom.add(client2);
        const result = chatRoom.rename(userName1, userName2);
        assert.ok(!result);
        assert.deepEqual(chatRoom.getClient(userName1), client1);
        assert.deepEqual(chatRoom.getClient(userName2), client2);
    });

    it('returns all clients', () => {
        const chatRoom = new ChatRoom();
        const client1 = {}, client2 = {}, client3 = {};
        chatRoom.add(client1);
        chatRoom.add(client2);
        chatRoom.add(client3);
        assert.deepEqual(chatRoom.getAllClients(), [client1, client2, client3]);
    });

    it('returns all clients except for one specified client', () => {
        const chatRoom = new ChatRoom();
        const client1 = {}, client2 = {}, client3 = {};
        chatRoom.add(client1);
        chatRoom.add(client2);
        chatRoom.add(client3);
        assert.deepEqual(chatRoom.getBroadcastClients(client2), [client1, client3]);
    });

});