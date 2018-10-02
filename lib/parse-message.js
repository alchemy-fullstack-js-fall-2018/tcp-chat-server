module.exports = function parseMessage (message) {
    return {
        command: message,
        arg: '',
        text: ''

    }
};

/*
A synchronous function that takes a string message and returns a command object (what is the command and any parameters) based on the contents of the message.

Test that it 'ignores strings that do not start with @'
Test that null is returned when passed a string that does not start with "@"
Test that a string like '@cmd:param some text' returns an object like:
{ 
    command: 'cmd',
    arg: 'param',
    text: 'some text'
}
*/