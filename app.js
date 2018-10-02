const net = require('net');
const Clients = require('./clients');
const processMessage = require('./processMessage');

const clients = new Clients();

module.exports = net.createServer(client => {
    
    client.setEncoding('utf8');
    clients.add(client);

    client.on('end', () => {
        clients.remove(client);
    });

    clients.on('data', data => {
        const message = `${client.username}: ${processMessage(data)}`; 
        clients.getBroadCastClients(clients);
        clients.forEach(c => c.write(message));
    });
});
