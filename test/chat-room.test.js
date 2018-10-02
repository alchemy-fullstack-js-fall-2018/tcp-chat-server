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

});
