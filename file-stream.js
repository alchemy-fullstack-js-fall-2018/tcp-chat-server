const fs = require('fs');
 
const stream = fs.createReadStream('./test.txt', {
    encoding: 'utf8',
    highWaterMark: 1
});

stream.on('data', data => {
    console.log(data);
});

stream.pipe(process.stdout);