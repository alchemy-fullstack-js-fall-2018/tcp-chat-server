const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const socket = net.connect(15678, () => {
    rl.setPrompt('');
    rl.prompt();

    rl.on('line', input => {
        socket.write(input);
    });

    socket.on('data', data => {
        /* eslint-disable-next-line no-console */
        console.log(/*'server says:', */ data);
    });

    socket.on('close', () => {
        /* eslint-disable-next-line no-console */
        console.log('server left, sorry bud!');
        socket.destroy();
    });
});

socket.setEncoding('utf8');
