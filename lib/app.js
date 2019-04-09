const { createServer } = require('net');
const ChatRoom = require('./chatRoom');
const parseMessage = require('./processMessage');

module.exports = () => {
    const chatRoom = new ChatRoom();
    return createServer(client => {
        client.setEncoding('utf8');
        chatRoom.add(client);

        client.on('end', () => chatRoom.remove(client));

        client.on('data', data => {
            const message = parseMessage(data);
            if(!message) return;
            switch(message.command) {
                case 'all':
                    chatRoom
                        .broadcast(client)
                        .forEach(c =>
                            c.write(`${client.userName}: ${message.text}`)
                        );
                    break;
                case 'nick':
                    chatRoom.rename(client.userName, message.arg);
                    break;
                case 'dm':
                    chatRoom
                        .getClient(message.arg)
                        .write(`(DM) ${client.userName}: ${message.text}`);
                    break;
                default:
                    client.write('Unknown command');
                    break;
            }
        });
    });
};
