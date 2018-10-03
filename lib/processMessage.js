module.exports = function processMessage(string) {
    if(string.charAt(0) !== '@') {
        return null;
    }

    const words = string.split(' ');
    //[@dm,nick]//


    const commandWithUserName = words[0].split(':');
    
    return {
        command: commandWithUserName[0],
        username: commandWithUserName[1],
        text: words.slice(1).join(' ')
    };



    // if(!message || message[0] !== '!') return message;

};
