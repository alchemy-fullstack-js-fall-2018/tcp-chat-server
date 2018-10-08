module.exports = function parseMessage(string) {
    if(string.charAt(0) !== '@') {
        return null;
    }
    
    let message = {};
    
    const words = string.split(' ');
    const commandWithUserName = words[0].split(':');
    const userInput = 



    return {
        command: commandWithUserName[0],
        username: commandWithUserName[1],
        text: words.slice(1).join(' ')
    };



   

};
