module.exports = function parseMessage(message) {
    if(message[0] !== '@') return null;
    
    let msg = {};

    const commandArr = message.slice(1).split(':');
    msg.command = commandArr[0];
    
    const argArr = message[1].split(' ');
    msg.arg = argArr[0];

    const text = message.slice(1).join(' ');
    msg.text = text;
    
    return msg;



};
