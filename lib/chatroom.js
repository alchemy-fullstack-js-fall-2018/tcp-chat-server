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
        this.map.delete(client);
    }

    getAllClients() {
        return [...this.map.values()];
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }
};
