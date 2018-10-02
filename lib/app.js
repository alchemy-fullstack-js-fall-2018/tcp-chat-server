const net = require('net');
const ChatRoom = require('../lib/chat-room.js');
const parseMessage = require('../lib/parse-message.js');

module.exports = function createChatRoomServer() {
    const chatRoom = new ChatRoom();

    net.createServer(client => {

        client.setEncoding('utf8');
        chatRoom.add(client);
        
        client.on('end', () => {
            chatRoom.remove(client);
        });
    
        client.on('data', data => {
            const parsedMessage = parseMessage(data);
            let dmRecipient;
            switch(parsedMessage.command) {
                case 'all':
                    chatRoom
                        .getBroadcastClients(client)
                        .forEach(c => c.write(`${client.userName}: ${parsedMessage.text}`));
                    break;
                case 'dm':
                    dmRecipient = chatRoom.getClient(parsedMessage.arg);
                    dmRecipient.write(`${client.userName}: ${parsedMessage.text}`);
                    break;
                case 'nick':
                    if(chatRoom.rename(client.userName, parsedMessage.arg)) {
                        client.write (`Your new name is ${client.userName}`);
                    } else {
                        client.write ('Unable to change name.');
                    }
                    break;
            }
        });
    });
};
