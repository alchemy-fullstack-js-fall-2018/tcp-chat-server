module.exports = class Clients {
    constructor() {
        this.map = new Map();
        // this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.map.size + 1}`;
        this.map.set(client.username, client);
    }

    getClient(client) {
        return this.map.get(client);
    }

    rename(oldName, newName) {
        this.map.forEach(client =>  {
            if(client.username === oldName) {
                client.username = newName;
            }
        });  

    }
};


