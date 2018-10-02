const app = require('./lib/app');
const port = 12345;

app.on('listening', () => {
    console.log('chat room has started on port: ', port);
});

app.listen(port);

