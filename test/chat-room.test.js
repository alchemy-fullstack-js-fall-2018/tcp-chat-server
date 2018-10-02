const assert = require('assert');
const ChatRoom = require('../lib/chat-room.js');

describe('chat room', () => {

    it('takes a socket, assigns user name, and stores by user name', () => {
        const chatRoom = new ChatRoom();
        let client = {};
        let userName = chatRoom.add(client);
        assert.equal (client.userName, 'user1');
        let returnedClient = chatRoom.getClient(userName);
        assert.deepEqual(returnedClient, client);        
    });

    /*
    Test that a ChatRoom instance 'takes a socket, assigns random user name, and stores by user name'. Do this by
creating a new ChatRoom
call .add(client) (note you can pass in a "mock", a plain empty object. Doesn't have to be a socket instance)
assert that a name was returned as the username property of the client object (e.g. assert.equal(client.username, username);)
assert that the name was assigned as a property to the client object
call .getClient(username) passing in the username returned from the .add call, and assert that the returned object is the same as what you supplied to the .add call.
    */

    it.skip('', () => {
        const chatRoom = new chatRoom();
    
    });

    /*
Test that a ChatRoom instance 'renames a user'
Create a new ChatRoom and add a user as above
Call .rename(username, newusername)
assert that the call to .rename returns true
assert that using the old username does not return the client
assert that using the new username does return the client
assert that the client.username is now equal to the new username (This means the property on the client object needs to change as well as the key in the map.
*/

    it.skip('', () => {
        const chatRoom = new chatRoom();
    
    });

    /*
Add a Test 'can not rename to existing user name'. Should not throw an error, just do not do the requested operation
Create a new ChatRoom and add two users
Call .rename(username1, username2)
assert that return value from .rename is false
assert that username1 and username2 return their original client objects
*/

    it.skip('', () => {
        const chatRoom = new chatRoom();
    
    });

    /*
Test that calling .all() on the chat room returns an array of all clients
Hint: Use the following to get all values from a map (example assumes map is stored as this.clients):
return [...this.clients.values()];
*/

});