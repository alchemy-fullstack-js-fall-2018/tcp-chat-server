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

    rename(oldName, newName) {
        if(this.clients.has(newName)) return false;
        
        const user = this.getClient(oldName);
        user.username = newName;

        this.clients.delete(oldName);
        this.clients.set(newName, user);
        return true;
    } 

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }


};
