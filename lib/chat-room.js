module.exports = class Clients {
    constructor() {
        this.map = new Map;
        this.userNumber = 1;
    }

    add(client) {
        const username = client.username = `user${this.userNumber++}`;
        this.map.set(username, client);
    }
    getClient(username) {
        return this.map.get(username);
    }
    rename(username, newUsername) {
        if(this.map.has(newUsername)) return false;
        else {
            const socket = this.map.get(username);
            socket.username = newUsername;
            this.map.set(newUsername, socket);
            return this.map.delete(username);
        }
    }
    all() {
        return [...this.map.values()];
    }
    getBroadcastClients(client) {
        return this.all().filter(c => c !== client);
    }
};
