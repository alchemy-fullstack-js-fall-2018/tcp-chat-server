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

    rename(userName, newUserName) {
        const client = this.clients.get(userName);
        if(this.clients.has(newUserName)) return false;
        if(this.clients.delete(userName)) {
            client.userName = newUserName;
            this.clients.set(newUserName, client);
            return true;
        } 
        return false;
    }

    getClient(userName) {
        return this.clients.get(userName);
    }

    remove(client) {
        this.clients.delete(client);
    }

    getAllClients() {
        return [...this.clients.values()];
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }
};