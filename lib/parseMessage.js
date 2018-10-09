module.exports = function parseMessage(message) {
    console.log('message', message);
    if(!message || message[0] !== '@') return message;
    else {
        const msg = message.split(' ');
        const userRequest = msg[0];

        // const
        // const userRequest = {
        //     command: 
        // }
        // if(message[1] === 'n') {

        // }
        // else if(message[1] === '')
        
    }
}

// function atAll(message) {
//     if(!message.startsWith('@')) return null;

//     const newLineCleaner = /\r|\n/g;
//     const msg = message.replace(newLineCleaner, '').split(' ');
//     return {
//         command: msg[0].split(':')[0].slice(1),
//         arg: msg[0].split(':')[1],
//         text: msg.slice(1).join(' ')
//     };
// }

// module.exports = atAll;
