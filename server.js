const app = require('./lib/app');

const PORT = 15678;

app.on('listening', () => {
    //eslint-disable-next-line no-console
    console.log('app started on port', PORT);
});

app.listen(PORT);
