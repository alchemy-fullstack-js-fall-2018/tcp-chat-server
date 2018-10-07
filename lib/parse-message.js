module.exports = function parseMessage(input) {
    if(input[0] !== '@') return null;

    const message = {};

    const splitInput = input.slice(1).split(':');
    message.cmd = splitInput[0];

    const argArray = splitInput[1].split(' ');
    message.arg = argArray[0];

    const text = argArray.slice(1).join(' ');
    message.text = text;

    return message;
};
