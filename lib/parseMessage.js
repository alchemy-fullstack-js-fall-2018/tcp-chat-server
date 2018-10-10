module.exports = function parseMessage(message) {
    console.log('message', message);
    if(!message || message[0] !== '@') return message;
    else {
        const msg = message.split(' ');
        const userRequest = msg[0];
        const text = msg.slice(1).join(' ');

        return {
            command: userRequest.split(':')[0].slice(0),
            arg: userRequest.split(':')[1].slice(0),
            text: text
        };

        
    }
};
