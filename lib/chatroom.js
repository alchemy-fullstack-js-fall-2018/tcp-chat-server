module.exports = class ChatRoom {
    constructor() {
        this.userNumber = 1;
        this.map = new Map(); // set is an [array], map is a {list of key value pairs}..
    }

    add(client) {//empty object
        client.username = `user${this.userNumber++}`; //property on the client object
        this.map.set(client.username, client); //username is key and value is the entire user
    }

    getAllClients() {
        return [...this.map.values()];
    }

    rename(username, newName) {
        const client = this.map.get(username); //get object from sophie
        client.username = newName;
        this.map.delete(username);
        this.map.set(newName, client);
        return this.map.get(newName);
    }
    
    getClient(username) {
        console.log(this.map.get(username));
        return this.map.get(username);
    }
};

// {
//     sophie: {
//         'username': 'sophie',
//         otherting: 'otherthing'
//     }
// }