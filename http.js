// Written by: Ashley Colbert
// Written on: January 26, 2024

// The Node.js global object 'http' is a basic, yet important built-in core object. It is used to set up servers. Data can then be transferred between the client and the http server. The server will listen for requests and send back responses. Below is a basic example of how to set up a server using http. 

//(Information gathered from www.geeksforgeeks.org, developer.mozilla.com, and stackoverflow.com)

//Import HTTP module
const http = require('http');

//Create the server:

//This function will take a request object and a response object and creates a listener to be called any time a request is made to the server.
const server = http.createServer((request, response) => {
  console.log(request);
  //Sets the 200 status(OK success status)
  response.statusCode = 200;
  //This sets the content-type to plain text.
  response.setHeader('Content-Type', 'text/plain');
  //This end response will be displayed on the server browser.
  response.end('This server was created using the Node global object \'http\'');
});

//This function will set up a listener to start the server. You choose what port it will run on. In this case the server will run on port 3000.
server.listen(3000, () => {
  console.log('Server is running on localhost:3000...');
});
