const net = require('net');
const Chatroom = require('./clients');
const parseMessage = require('./parse-message');

const clients = new Chatroom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);



    client.on('end', () => {
        clients.remove(client);
    });

    client.on('data', msg => {

        const input = parseMessage(msg);
        const message = `${client.username}: ${input.text}`;
        if(input.cmd === 'all') {
            clients
                .getBroadcastClients(client)
                .forEach(c => c.write(message));
        }

        if(input.cmd === 'nick') {
            clients.rename(client.username, input.arg);
            console.log(client.username);
            client.write(`Your new name is ${client.username}`);
        }

        if(input.cmd === 'dm') {
            clients.getClient(input.arg)
                .write(`${client.username}: ${input.text}`);
        }
    });
   
   
});
