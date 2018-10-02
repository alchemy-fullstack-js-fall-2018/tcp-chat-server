module.exports = class Clients {
    constructor() {
        this.clients = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.clients.set(client, client.username);
    }

    getAllClients() {
        console.log([...this.clients.keys()]);
        return [...this.clients.keys()];
    }

    remove(client) {
        this.clients.delete(client);
        console.log(this.getAllClients());
    }

};
