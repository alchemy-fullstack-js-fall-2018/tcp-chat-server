module.exports = function parseMessage(string) {
    const message = {};
    if(string[0] !== '@') return null;
    else {
        const words = string.split(' ');
        const parse = words[0].split(':');
        message.cmd = parse[0].slice(1);
        message.arg = parse[1];
        message.text = words.slice(1).join(' ');
        return message;
    }
};
