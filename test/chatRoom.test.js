const assert = require('assert');
const ChatRoom = require('../lib/chatRoom');

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

});
