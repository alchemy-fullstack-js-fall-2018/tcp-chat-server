module.exports = class ChatRoom {
    constructor() {
        this.clients = new Map();
        // this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.clients.size + 1}`;
        this.clients.set(client.username, client);
    }

    getClient(client) {
        return this.clients.get(client);
    }

    rename(oldName, newName) {
        // this.clients.forEach(client =>  {
        //     if(client.username === oldName) {
        //         client.username = newName;
        //     }
        // });  
        // this.clients.forEach(client => {
        //     if(client.username === newName) {
        //         return false;
        //     }
        // });

        if(this.clients.has(newName)) {
            return false;
        }

        this.clients.set(newName, { 'username': newName });
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


