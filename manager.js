'use strict';

const evente = require('./events');
const pilot = require('./pilot');

evente.on('new-flight', newFilght);


function newFilght(id) {
    let Flight = {
        event: 'new-flight',
        time: new Date,
        airLine: 'Royal Jordanian Airlines',
        flightID: id,
        pilot: 'Jane doe',
        destination: 'Manchester, UK'
    }
    console.log(`Manager : new flight with ID ${id} have been scheduled`);
    console.log('Flight', Flight);

    setTimeout(() => {
        console.log(`Pilot: flight with ID ${id} took-off`);
        pilot.emit('took-off', (id))
    }, 4000);
    setTimeout(() => {
        console.log(`Pilot: flight with ID ${id} arrived`);
        pilot.emit('arrived', (id));
    },7000)
}



module.exports = evente;



