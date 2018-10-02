const net = require('net');
const ChatRoom = require('./clients');
const parseMessage = require('./parseMessage');

const clients = new ChatRoom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);
    client.write('Hello World');

    client.on('end', () => {
        clients.remove(client);
    });

    client.on('data', data => {
        const message = `${client.username}: ${parseMessage(data)}`;

        clients
            .getBroadcastClients(client)
            .forEach(c => c.write(message));
    });
});
