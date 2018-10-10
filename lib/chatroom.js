module.exports = class Clients {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(client) {
        const name = this.userNumber++;
        client.username = `user${name}`;
        this.map.set(client.username, client);
        return client;
    }

    remove(client) {
        this.map.delete(client.username);
    }

    rename(client, newName) {
        this.map.delete(client.username);
        client.username = newName;
        this.map.set(client.username, client);
        return client.username;
    }

    getClient(username) {
        return this.map.get(username); 
    }

    getAllClients() {
        return [...this.map.values()];
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }
};
