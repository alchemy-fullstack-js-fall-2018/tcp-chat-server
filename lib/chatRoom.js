class ChatRoom {
    constructor() {
        this.clients = new Map();
        this.userNumber = 1;
    }

    add(client) {
        const userName = `user${this.userNumber++}`;
        client.userName = userName;
        this.clients.set(userName, client);
    }
    rename(userName, newUserName) {
        if(this.clients.has(newUserName)) return false;

        const client = this.clients.get(userName);
        this.clients.delete(userName);
        client.userName = newUserName;
        this.clients.set(newUserName, client);

        return true;
    }

    remove(client) {
        this.clients.delete(client.userName);
    }

    getClient(userName) {
        return this.clients.get(userName);
    }

    getAllClients() {
        return [...this.clients.values()];
    }

    broadcast(client) {
        return this.getAllClients().filter(c => c !== client);
    }
}

module.exports = ChatRoom;
