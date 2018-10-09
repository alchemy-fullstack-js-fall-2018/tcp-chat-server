module.exports = function parseMessage(string) {
    
    if(string.charAt(0) !== '@') {
        return null;
    }
    
    const message = {};

    const splitInput = string.slice(1).split(':');
    // console.log(splitInput);
    if(splitInput.length > 1) {
        message.command = splitInput[0];

        const argArray = splitInput[1].split(' ');
        message.arg = argArray[0];
    
        const text = argArray.slice(1).join(' ');
        message.text = text;
    } else {
        message.command = 'all';
        message.arg = '';
        const text = string.slice(5);
        message.text = text;
    }
    
    return message;
};
