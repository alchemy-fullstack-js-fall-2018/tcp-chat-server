/* eslint-disable no-console */
const net = require('net');

const server = net.createServer(client => {
    console.log('client connected!');
    client.setEncoding('utf8');
    
    client.write('hello client!');

    client.on('data', data => {
        console.log('client sez:', data);
        client.write('thanks for the message!');
    });

    client.on('end', () => {
        console.log('client left');
    });
});

server.listen(15678);
