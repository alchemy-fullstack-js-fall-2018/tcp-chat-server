
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
