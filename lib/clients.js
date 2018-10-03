module.exports = class ChatRoom {
    constructor() {
        this.clients = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.clients.set(client.username, client);
    }

    getClient(client) {

        return this.clients.get(client);
    }

    rename(oldName, newName) {
        if(this.clients.has(newName)) {
            return false;
        }
        
        const user = this.getClient(oldName);
        user.username = newName;
        
        this.clients.set(newName, user);
        this.clients.delete(oldName);
        return true;
    }

    all() {
        return [...this.clients.values()];
    }

    getBroadcastClients(client) {
        return this.all().filter(c => c !== client);
    }
};


