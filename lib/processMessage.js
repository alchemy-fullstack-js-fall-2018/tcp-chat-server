module.exports = function processMessage(message) {
    if(!message || message[0] !== '@') return null;

    let object = { command: '', arg: '', text: '' };
    const msg = message.slice(1, message.length).split(':');

    object.command = msg[0];
    object.arg = msg[1].split(' ')[0];
    object.text = msg[1].slice(msg[1].indexOf(' ') + 1, msg[1].length);

    return object;
};
