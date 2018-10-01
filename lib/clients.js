module.exports = class Clients {
    constructor() {
        this.set = new Set();
        this.userNumber = 1;
    }

    add(client) {
        const name = this.userNumber;
        this.userNumber++;

        client.username = `user${name}`;
        this.set.add(client);
        return client;
    }

    remove(client) {
        this.set.delete(client);
    }
    
    getAll() {
        return [...this.set];
    }
};
