module.exports = function parseMessage(message) {
    let msg = {};
    
    if(message[0] === '@') {

        message = message.slice(1).split(':');
        msg.command = message[0];
        
        message = message[1].split(' ');
        msg.arg = message[0];

        message = message.slice(1).join(' ');
        msg.text = message;
        
        return msg;
    }

};
