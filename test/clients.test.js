const assert = require('assert');
const Clients = require('../lib/clients');

describe('Clients', () => {
    let clients = null;
    const c1 = {};
    const c2 = {};
    const c3 = {};
    
    beforeEach(() => {
        clients = new Clients();
        clients.add(c1);
        clients.add(c2);
        clients.add(c3);
    });
    
    it('assigns names', () => {
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
        assert.equal(c3.username, 'user3');
    });

    it('removes a client', () => {
        clients.remove(c1);
        assert(!clients.map.get(c1));
        console.log('clients after remove', clients);
    });

    it('allows users to change username', () => {
        const newName = 'Zip';
        
    });

    // it('gets all clients', () => {

    //     const expectedClients = [c1];

    //     const allClients = clients.getAll();

    //     assert.deepEqual(allClients, expectedClients);
    // });

    // it('gets all clients except self', () =>{
    //     const broadcastClients = clients.getBroadcastClients();
    //     assert.deepEqual(broadcastClients, )
    // })

});
