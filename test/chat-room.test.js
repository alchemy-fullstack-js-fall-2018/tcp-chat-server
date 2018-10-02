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

    /*
Add a Test 'can not rename to existing user name'. Should not throw an error, just do not do the requested operation
Create a new ChatRoom and add two users
Call .rename(username1, username2)
assert that return value from .rename is false
assert that username1 and username2 return their original client objects
*/

    it.skip('', () => {
        const chatRoom = new ChatRoom();
    
    });

    /*
Test that calling .all() on the chat room returns an array of all clients
Hint: Use the following to get all values from a map (example assumes map is stored as this.clients):
return [...this.clients.values()];
*/

});