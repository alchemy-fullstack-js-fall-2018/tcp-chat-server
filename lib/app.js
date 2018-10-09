const net = require('net');
const Clients = require('./clients');

const clients = new Clients();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);

    client.write('Welcome to the chat room!');

    client.on('end', () => clients.remove(client));

    client.on('data', msg => {
        const message = `${client.username}: ${msg}`;
        clients
            .getBroadcastClients(client)
            .forEach(c => c.write(message));
    });
});
