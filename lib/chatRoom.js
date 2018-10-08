
module.exports = class Clients {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.userName = `user${this.userNumber++}`;
        this.map.set(client.userName, client);
    }
    rename(userName, newUserName) {
        if(this.map.has(newUserName)) return false;
        const client = this.getClient(userName);
        this.map.delete(userName);
        client.userName = newUserName;
        this.map.set(newUserName, client);
        return true;
    }

    remove(client) {
        this.map.delete(client.userName);
    }

    getClient(userName) {
        return this.map.get(userName);
    }

    getAllClients() {
        return [...this.map.values()];
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }
};
