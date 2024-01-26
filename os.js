//Written by: Ashley Colbert
//Written on: January 26, 2024

// The global core Node.js module OS is a very simple, but interesting and useful module. It interacts with your operating system to return a lot of useful information about it. Once the module is imported using require('os') you can use console.log to provide a variety of data. This is represented below:

//(Information gathered from geekforgeeks.com, stackoverflow.com, and nodejs.org)


//Import the OS module:
const os = require('os');

//This will return the architecture of the operating system's central processing unit:
console.log(os.arch());

//This will return an array of objects, such as the model and speed, about each CPU/core installed on the system.
console.log(os.cpus());

//The os.freemem will return the about of free memory left on the system. The os.totalmem will return the total memory found on the system. Both methods will be returned in bytes:
console.log(os.freemem());
console.log(os.totalmem())

//This will supply the home directory of the current user:
console.log(os.homedir());

//This will return the hostname, ex, MacBook-Pro:
console.log(os.hostname());

//This will return the platform the operating system exists on:
console.log(os.platform());



