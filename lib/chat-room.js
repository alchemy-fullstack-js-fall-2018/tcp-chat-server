module.exports = class Clients {
    constructor() {
        this.users = new Map();        
        this.userNumber = 1;
    }

    add(client) {
        let array = [];
        for(let index = 0; index < this.users.length; index++) {
            if(!this.items.hasOwnProperty(index)) continue;
            const user = this.users[index];
            const newList = callback(user);
            array[index] = newList;
        }
        client.username = `user${this.userNumber++}`;
        
    }



};

