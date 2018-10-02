// const dgram = require('dgram');
const app = require('./lib/app');

app.listen(9876);
// const server = dgram.createSocket('udp4');

// server.on('error', (err) => {
//     console.log(`server error: \n${err.stack}`);
//     server.close();
// });

// server.on('listening', () => {
//     const address = server.address();
//     console.log(`server listening ${address.address}:${address.port}`);
// });

// server.bind(9876);
