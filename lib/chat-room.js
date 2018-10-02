module.exports = class ChatRoom {
    constructor() {
        this.clients = new Map();
        this.userNumber = 0;
    }

    add(client) {
        this.userNumber ++;
        let userName = `user${this.userNumber}`;
        this.clients.set(userName, client);
        client.userName = userName;
        return userName;
    }

    rename(username, newUsername) {
        
    }

    getClient(userName) {
        return this.clients.get(userName);
    }

    remove(client) {
        this.clients.delete(client);
    }

    getAllClients() {
        return [...this.set.values()];
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }
};