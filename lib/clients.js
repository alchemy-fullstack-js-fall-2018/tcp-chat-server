module.exports = class Clients {
    constructor() {
        this.clients = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.clients.set(client.username, client);
    }

    getAllClients() {
        // console.log([...this.clients.keys()]);
        return [...this.clients.keys()];
    }

    remove(client) {
        this.clients.delete(client);
    }

    getBroadcastClients(client) {
        console.log(this.getAllClients().filter(c => c !== client));
        return this.getAllClients().filter(c => c !== client);
        
    }


};
