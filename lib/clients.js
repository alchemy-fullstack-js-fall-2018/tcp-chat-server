module.exports = class Clients {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.map.set(client.username, client);
    }

    getClient(client) {
        
        return this.map.get(client);
    }
};


