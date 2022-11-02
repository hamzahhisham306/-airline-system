'use strict';

const io = require( 'socket.io' )( 4000 );

io.on( 'connection', ( socket ) => {
    socket.on( 'new-flight', ( info ) => {
        io.emit( 'new-flight', info );
        console.log( 'Flight',{
            event: 'new-flight',
            time: new Date(),
            info: {
                airLine: info.airLine,
                flightID: info.flightID,
                pilot: info.pilot,
                destination: info.destination,
            }
        });
    } );
    socket.on('arrived', ( info ) => {
        io.emit( 'arrived', info );
        console.log( 'Flight' ,{
            event: 'arrived',
            time: new Date,
            info: {
                airLine: info.airLine,
                flightID: info.flightID,
                pilot: info.pilot,
                destination: info.destination,
            }
        });
    } );
} );


const socketAirline = io.of('/airline');

socketAirline.on( 'connection', ( socket ) => {
    socket.on( 'took-off', ( info ) => {
        console.log( 'Flight',{
            event: 'took-off',
            time: new Date,
            info: {
                airLine: info.airLine,
                flightID: info.flightID,
                pilot: info.pilot,
                destination: info.destination,
            }
        });
    } );
} );