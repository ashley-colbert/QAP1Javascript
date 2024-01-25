const event = require('events');

var emitter = new event.EventEmitter();

//An event listener is registered. Contains a method to log that the event has been emitted.

emitter.on('message', function(){
  console.log('Event occurred')
})

//Event is raised.

emitter.emit('message');