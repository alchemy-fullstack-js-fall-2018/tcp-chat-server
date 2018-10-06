const net = require('net');
const Chatroom = require('./clients');
// const processMessage = require('./pr')

const clients = new Chatroom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);

    client.on('end', () => {
        clients.remove(client);
    });

    client.on('data', msg => {
        const message = `${client.username}: ${msg}`;
        clients
            .getBroadcastClients(client)
            .forEach(c => c.write(message));
    });
   
   
});
