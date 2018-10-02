module.exports = function parseMessage(message) {
    if(message[0] !== '@') return null;

    const indexFirstSpace = message.indexOf(' ');
    const indexFirstColon = message.indexOf(':');
    let command = '';
    let arg = '';
    let text = '';

    if(indexFirstSpace === -1) {
        command = message.slice(1, indexFirstColon);
        arg = message.slice(indexFirstColon + 1, message.length);
    } else if(indexFirstColon === -1) {
        command = message.slice(1, indexFirstSpace);
        text = message.slice(indexFirstSpace + 1, message.length);
    } else { 
        command = message.slice(1, indexFirstColon);
        arg = message.slice(indexFirstColon + 1, indexFirstSpace);
        text = message.slice(indexFirstSpace + 1, message.length);
    }

    return {
        command: command,
        arg: arg,
        text: text
    };
};