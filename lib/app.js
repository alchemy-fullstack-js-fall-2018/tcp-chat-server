const net = require('net');
const ChatRoom = require('./chat-room');
const parseMessage = require('./parse-message');

const chatRoom = new ChatRoom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    chatRoom.add(client);
    client.write(`Welcome to the chatroom ${client.username}`);
    client.write(
        'use @all to talk to entire chat ' + 
        '@nick:<new username> to change your username ' +
        '@dm:<another username> to direct message that user');

    client.on('end', () => {
        chatRoom.remove(client.username);
        chatRoom
            .all()
            .forEach(c => c.write(`${client.username} has left`));
    });

    client.on('data', data => {
        const message = parseMessage(data);

        if(!message) {
            //nothing to do
        }
        
        else if(message.cmd === 'all') {
            chatRoom
                .getBroadcastClients(client)
                .forEach(c => c.write(`${client.username}: ${message.text}`));
        }
        else if(message.cmd === 'nick') {
            chatRoom
                .rename(client.username, message.arg);
            chatRoom
                .getClient(client.username)
                .write(`you are now ${client.username}`);
        }
        else if(message.cmd === 'dm') {
            const client = chatRoom
                .getClient(message.arg);
            if(client) {
                client.write(`${client.username}[dm]: ${message.text}`);
            }
        }
    });
});

