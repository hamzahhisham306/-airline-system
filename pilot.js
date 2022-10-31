'use strict';


const evente = require('./events');

evente.on('took-off', tookOff);
evente.on('arrived', arrived);

function tookOff(id) {
    let Flight = {
        evente: 'took-off',
        time: new Date,
        Details: {
            airLine: 'Royal Jordanian Airlines',
            flightID: id,
            pilot: 'Jane doe',
            destination: 'Manchester, UK'
        }
    }
    console.log('Flight', Flight);
}

function arrived(id) {
    let Flight = {
        event: 'arrived',
        time: new Date,
        Details: {
            airLine: 'Royal Jordanian Airlines',
            flightID: id,
            pilot: 'Jane doe',
            destination: ' Manchester, UK'
        }
    }
    console.log('Flight', Flight);
    console.log('Manager: we are greatly thankful for the amazing flight, Jane doe')
}

module.exports = evente;