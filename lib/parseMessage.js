module.exports = function parseMessage(message) {
    if(message[0] !== '@') return null;
    
    let msg = {};

    const splitMessage = message.slice(1).split(':');
    msg.command = splitMessage[0];
    
    const argArr = splitMessage[1].split(' ');
    msg.arg = argArr[0];

    const text = argArr.slice(1).join(' ');
    msg.text = text;
    
    return msg;



};
