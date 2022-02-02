var events = require('events');
var eventEmitter = new events.EventEmitter();


var myHandler = function() {
    console.log("Hello world");
    eventEmitter.emit('event2');
}

var myHandler2 = function() {
    console.log("This is string");
}

eventEmitter.on('event3', function() {
    console.log("welcome");
})

eventEmitter.on('event1', myHandler);

eventEmitter.on('event2', myHandler2);

eventEmitter.emit('event1');

eventEmitter.emit('event3');

eventEmitter.on('event4', function(msg) {
    console.log(msg);
})
eventEmitter.emit('event4', 'this is event4');

var i = 0;
// eventEmitter.on('event5', function() {
//     console.log(++i);
// })

eventEmitter.once('event5', function() {
    console.log(++i);
})

eventEmitter.emit('event5');
eventEmitter.emit('event5');
eventEmitter.emit('event5');