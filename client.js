/* eslint no-console: off */

const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.connect(15678, () => {
    rl.setPrompt('chatRoom>');
    rl.prompt();

    rl.on('line', input => {
        client.write(input);
    });
    
    client.on('data', data => {
        console.log(data);
    });

    client.on('close', () => {
        console.log('Chat room has closed!');
    });

    client.on('end', () => {
        console.log('Chat room has closed!');
    });
});

client.setEncoding('utf8');