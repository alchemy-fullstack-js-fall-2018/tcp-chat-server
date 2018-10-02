/* eslint no-console: off */

const net = require('net');
const ChatRoom = require('../lib/chat-room.js');
const parseMessage = require('../lib/parse-message.js');

module.exports = function createChatRoomServer() {
    const chatRoom = new ChatRoom();

    return net.createServer(client => {

        client.setEncoding('utf8');
        chatRoom.add(client);
        client.write(`You are ${client.userName}.`);
        
        client.on('end', () => {
            console.log(`Client ${client.userName} disconnected`);
            chatRoom.remove(client);
        });

        client.on('error', (err) => {
            console.log(err);
            client.destroy();
        });
    
        client.on('data', data => {
            const parsedMessage = parseMessage(data);
            if(parsedMessage === null) {
                client.write ('All messages must begin with @.');
            } else {
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
                    default:
                        client.write ('Unable to interpret command.');
                }
            }
        });
    });
};
