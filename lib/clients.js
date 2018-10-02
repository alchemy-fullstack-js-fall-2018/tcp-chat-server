module.exports = class Clients {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(nickname) {
        console.log('nickname', nickname);
        let userNumber = this.userNumber++;
        console.log('userNumber', userNumber);
        console.log('this.map before', this.map);
        
        this.map.set(userNumber, nickname);
        console.log('this.map after', this.map);
    }

    remove(userNumber) {
        this.map.delete(userNumber);
    }
    
    getAll() {
        return [...this.map];
    }
};
