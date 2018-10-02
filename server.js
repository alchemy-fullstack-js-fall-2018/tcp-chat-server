/* eslint no-console: off */

const createChatRoomServer = require('./lib/app.js');

const server = createChatRoomServer();
server.listen(15678);
console.log('server is listening');
