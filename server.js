const createChatRoomServer = require('./lib/app.js');

const server = createChatRoomServer();
server.listen(15678);
