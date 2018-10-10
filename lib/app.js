const net = require('net');
const Clients = require('./chatroom');
const processMessage = require('./processMessage');

const clients = new Clients();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);

    client.on('end', () => clients.remove(client));

    client.on('data', msg => {
        // console.log(msg);
        // const message = `${client.username}: ${processMessage(msg)}`;
        // clients.getBroadcastClients(client)
        //     .forEach(c => c.write(message));
        const { command, arg, message } = processMessage(msg);

        switch(command) {
            case 'all': 
                clients.getBroadcastClients(client).forEach((user)=> {
                    user.write(message);
                });
                break;
            case 'nick': 
                clients.
                break;
            case 'dm': 
                break;
            default: 
                client.write('not an available command');
                break;

        }
    });
});
