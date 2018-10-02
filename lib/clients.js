module.exports = class Clients {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.map.set(client.username, client);
    }

    remove(client) {
        this.map.delete(client.username);
    }

    changeName(client, newName) {
        if(this.map.has(newName)) return;
        this.remove(client);
        this.map.set(newName, client);
        client.username = newName;
    }
    
    getAll() {
        return [...this.map];
    }
};
