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

        const input = parseMessage(data);
        const message = `${client.username}: ${input.text}`;

        if(input.command === 'all'){ 
            clients
                .getBroadcastClients(client)
                .forEach(c => c.write(message));
        }

        if(input.command === 'nick') {
            clients.rename(client.username, input.text);
            client = clients.getClient(client.username);
            client.write(`Your new username is ${client.username}`);
        }

        if(input.command === 'dm') {
            client = clients.getClient(input.arg);
            client.write(input.text);

        }
    });
});
