'use strict';

const manager = require('./manager');

function createId(){
    return Math.floor((1 + Math.random()) * 0x1000000000000).toString(20);
}


Promise.all([
    new Promise(resolve => setInterval(Interval, 10000)),
]);

function Interval(){
    let id=createId();
   return manager.emit('new-flight',(id));

}
