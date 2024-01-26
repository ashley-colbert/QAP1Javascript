// Written by: Ashley Colbert
// Written on: January 26, 2024

//The node.js global core object, events, is used to handle and emit events using the EventEmitter class. This is often used in conjunction with other global objects, such as process, buffer, console, etc. Below is some basic code to show how the events object is imported, then used to create a simple function to call an event where text is printed to the console. Additionally there are two functions that show how the events object can interact with the setInterval and setTimeout object to show different options for emitting events.

//(Information gathered from geeksforgeeks.org, stackoverflow.com, nodejs.com)

//Import the events object
const EventEmitter = require('events');

//Extends the EventEmitter class to the MyEmitter
class MyEmitter extends EventEmitter {}

//Creates a myEmitter variable to create a new MyEmitter instance.
const myEmitter = new MyEmitter();

//An event listener is registered. Contains a function to log that the event has been emitted.

myEmitter.on('message', () => {
  console.log('Event occurred')
})

//Event is emitted and will be the first event logged to the console.

myEmitter.emit('message');

//The next 5 events will be printed to the console using the object setInterval. This can be used in combination with the events object to set events to occur at a set interval for a specified amount of times.
let count = 0;
const intervalEvent = setInterval(() => {
  count++;
  console.log('Interval', count);
  myEmitter.emit('message');
    //This will clear the event after they have been executed 3 times. If clearInterval is not used the event will continue to be emitted every second until manually stopped.
    if(count === 3) {
      clearInterval(intervalEvent)
    }
    //This sets the events to occur at one second intervals
}, 1000);

//The setTimeout object is also build into node and can me used with the events object to emit the event after a certain amount of time.
setTimeout(() => {
  console.log('The last')
  myEmitter.emit('message');
  //The event will be emitted after 4 seconds.
}, 4000);