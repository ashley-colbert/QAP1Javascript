// Written by: Ashley Colbert
// Written on: January 26, 2024

// The Node.js global object 'http' is one of the most important built in core objects. It is used to set up servers. Data can them be transferred between the client and the http server. The server will listen for requests and send back responses. Below is a basic example of how to set up a server using by requiring http. (Information gathered from www.geeksforgeeks.org, )


const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('This server was created using the Node global object \'http\'');
});

server.listen(3000, () => {
  console.log('Server is running on localhost:3000...');
});
