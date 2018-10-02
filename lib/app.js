const net = require('net');
const chatRoom = require('./chat-room');
const processMessage = require('./processMessage');



const clients = new Clients();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);
    
    client.nickname = 'User' + clients;

    const clientName = client.nickname;

    console.log(clientName + ' joined the chatroom.');

    client.write('welcome to CHHING chat! \n');


    client.on('end', () => {
        clients.remove(client);
    });

    clients.on('data', data => {
        const message = `${client.username}: ${processMessage(data)}`; 
        clients.getBroadCastClients(client).forEach(c => c.write(message));
    });


});
