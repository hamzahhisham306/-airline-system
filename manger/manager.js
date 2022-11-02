'use strict';

// const evente = require('../events');
// const pilot = require('../pilot/pilot');

const io = require('socket.io-client');

const socket = io.connect('http://localhost:4000');


setInterval(() => {
    let id = Math.floor((1 + Math.random()) * 0x1000000000000).toString(20);
    let Flight = {
        event: 'new-flight',
        time: new Date,
        airLine: 'Royal Jordanian Airlines',
        flightID: id,
        pilot: 'Jane doe',
        destination: 'Manchester, UK'
    }
    console.log(`Manager: new flight with ID ${Flight.flightID} have been scheduled`);
    console.log( `Manager: we’re greatly thankful for the amazing flight, ${Flight.pilot}`);
    socket.emit( 'new-flight', Flight );

}, 10000);


socket.on( 'arrived', ( Flight ) => {
    console.log( `Manager: we’re greatly thankful for the amazing flight, ${Flight.pilot}` );
} );




