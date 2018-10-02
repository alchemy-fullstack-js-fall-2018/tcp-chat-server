module.exports = function parseMessage(message) {
    let msg = {};
    if(message[0] === '@') {
        const command = message.slice(1).split(':')
        msg.command = command[0];
        
        const arg = command[1].split(' ');
        msg.arg = arg[0];

         const text = arg.slice(1).join(' ');
        msg.text = text;
        
        return msg;
    }

};
