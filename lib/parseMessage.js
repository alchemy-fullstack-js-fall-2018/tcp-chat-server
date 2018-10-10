module.exports = function parseMessage(message) {
    if(message[0] !== '@') return null;

    let msg = {};

    const splitMessage = message.slice(1).split(':');
    message.command = splitMessage[0];

    const aArr = splitMessage[1].split(' ');
    msg.arg = aArr[0];

    const text = aArr.slice(1).join(' ');
    msg.text = text;
    
    return msg;
};