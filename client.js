const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
});

const socket = net.connect(12345, () => {
    rl.setPrompt('Say something: ');
    rl.prompt();

    rl.on('line', input => {
        socket.write(input);
    });

    socket.on('data', data => {
        console.log(/*'server sez:', */ data);
    });

    socket.on('close', () => {
        console.log('left server');
        socket.destroy();
    });
});

socket.setEncoding('utf8');
