module.exports = function parseMessage(message) {
    if(message[0] !== '@') return null;
        
    const splitMsg = message.slice(1).split(':');
    const msgArg = splitMsg[1].split(' ');
    const text = msgArg.slice(1).join(' ');
    
    let msgObj = {};
    msgObj.command = splitMsg[0];
    msgObj.arg = msgArg[0];
    msgObj.text = text;
    
    return msgObj;
    
};
