module.exports = function parseMessage(message) {
    if(!message || message[0] !== '@') return null;
    else {
        const msg = message.split(' ');
        const userRequest = msg[0];
        const text = msg.slice(1).join(' ');

        if(userRequest.match(/:/)) {
            return {
                command: userRequest.split(':')[0].slice(0),
                arg: userRequest.split(':')[1].slice(0),
                text: text
            };
        }
        else {
            return {
                command: userRequest,
                text: text
            };
        }
    }
};
