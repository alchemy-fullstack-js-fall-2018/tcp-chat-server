const assert = require('assert');
const Clients = require('../lib/clients');

describe('Clients', () => {
    let clients = null;
    
    beforeEach(() => {
        clients = new Clients();
        clients.add('foo');
        console.log('clients', clients);

    });

    it('assigns names', () => {
        assert.equal(clients, 'foo');

    });

    // it('remove a client', () => {
    //     const c1 = clients.add({});
    //     clients.remove(c1);

    //     assert(!clients.set.has(c1));
    // });

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
