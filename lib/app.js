const net = require('net');
const Clients = require('./clients');
const processMessage = require('./processMessage');
const sockets = [];


const clients = new Clients();

module.exports = net.createServer(client => {
    
    client.setEncoding('utf8');
    clients.add(client);
    
    client.nickname = 'User' + clients;

    const clientName = client.nickname;

    sockets.push(client);

    console.log(clientName + ' joined the chatroom.');

    client.write('welcome to CHHING chat! \n');


    client.on('end', () => {
        clients.remove(client);
    });

    clients.on('data', data => {
        const message = `${client.username}: ${processMessage(data)}`; 
        clients.getBroadCastClients(client);
        clients.forEach(c => c.write(message));
    });

    function broadcast(from, message) {
        if(clients.length === 0 || null){
            process.stdout.write('No users in the chat');
            return;
        }

        clients.forEach('socket'(index, array) => {
            if( this.clientName === from) 
            return;

            client.write(message);
        });
    }
   

});
