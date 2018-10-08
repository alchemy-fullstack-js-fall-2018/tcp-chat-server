/* eslint-disable no-console */
const net = require('net');
const Clients = require('./chatRoom');
const processMessage = require('./processMessage');

const clients = new Clients();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);

    client.write('hello client!');
    client.on('end', () => {
        clients.remove(client);
    });

    client.on('data', data => {
        const message = `${client.username}: ${processMessage(data)}`;
        clients.getBroadcastClients(client).forEach(c => c.write(message));

        if(message){

            if(message.command == 'nick'){
                client.rename(client.username, message.arg);
                client.getClient(client.username).write(`You have changed your name to ${client.username} \n`);
            }
            else if(message.command == 'dm'){
                let toUser = client.getClient(message.arg);
                if(toUser){
                    toUser.write(`${client.username}: ${message.text} \n`);
                }
                else {
                    client.write(`${message.arg} does not exist. \n`);
                }
            }
            else if(message.command == 'all()'){
                client
                    .getAllClients().filter(c => c.username !== client.username)
                    .forEach(c => c.write(`${client.username}: ${message.text} \n`));
            }
        }
    });
});
