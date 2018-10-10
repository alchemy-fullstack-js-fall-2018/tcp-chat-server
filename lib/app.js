const net = require('net');
const ChatRoom = require('./clients');
const parseMessage = require('./parseMessage');

const clients = new ChatRoom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);

    client.write('Welcome to the chat room!');

    client.on('end', () => clients.remove(client));

    client.on('data', msg => {
        const message = parseMessage(msg);
        if(message.command === '@nick') {
            clients.changeName(client, message.arg);
            client.write(`Your name has changed to ${message.arg}`);
        }
        else if(message.command === '@dm') {
            let dm = clients.getClient(message.arg);
            dm.write(message.text);
        }
        else if(message.command === '@all') {
            clients
                .getBroadcastClients(client)
                .forEach(c => c.write(message.text));
        }
        
    });
});
