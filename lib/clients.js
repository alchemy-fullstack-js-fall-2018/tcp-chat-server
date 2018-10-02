module.exports = class Clients {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.map.set(client.username, client);
        return client.username;
    }

    remove(userNumber) {
        this.map.delete(userNumber);
    }
    
    getAll() {
        return [...this.map];
    }
};
