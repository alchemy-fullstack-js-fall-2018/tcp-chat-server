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

    getAllClients() {
        return [...this.map.values()];
    }
    
    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }

    getClient(username) {
        return this.getAllClients().filter(c => c.username === username)[0];
    }
};
