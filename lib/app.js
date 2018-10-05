const net = require('net');
const ChatRoom = require('./chatroom');

const clients = new ChatRoom;

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);

    client.on('data', msg => {
        console.log(msg);
    });
});