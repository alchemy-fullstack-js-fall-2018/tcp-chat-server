module.exports = class ChatRoom {
    constructor() {
        this.clients = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.clients.set(client.username, client);
    }

    getAllClients() {
        return [...this.clients.values()];
    }

    getClient(client) {
        return this.clients.get(client);
    }

    remove(client) {
        this.clients.delete(client);
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }


};
