'use strict';

const io = require( 'socket.io-client' );
const socket = io.connect( 'http://localhost:4000/airline');
const Socket = io.connect( 'http://localhost:4000' );


Socket.on( 'new-flight', ( info ) => {
    setTimeout( () => {
        console.log( ` Pilot: flight with ID ‘${info.flightID}’ took-off` );
        socket.emit( 'took-off', info );
    }, 4000 );
    setTimeout( () => {
        console.log( `Pilot: flight with ID '${info.flightID}' has arrived` );
        Socket.emit( 'arrived', info );
    }
     , 7000 );
} );





