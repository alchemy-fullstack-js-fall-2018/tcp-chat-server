const net = require('net');
const Clients = require('./chat-room');
const processMessage = require('./parseMessage');

const clients = new Clients();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);

    client.write('welcome to CHHING chat! \n');

    client.on('end', () => {
        clients.remove(client);
    });

    client.on('data', data => {
        const message = processMessage(data)

        if(!message) {
            //handle error
            return;
        }
        const clientMessage = `${client.username}: ${message.text}`; 
        console.log(message);
        if(message.command === '@all') {
            clients.getBroadcastClients(client).forEach(c => c.write(clientMessage));
        } else if(message.command === '@dm') {
            clients.getClient(message.username).write(clientMessage);
        } else if(message.command === '@nick') {
            clients.renameClient(client.username).write(`Your new name is ${client.username}`); 
            //change user name//
        } else {
            //handle error
            client.write('unable to change name');
        }
        
    });


});
