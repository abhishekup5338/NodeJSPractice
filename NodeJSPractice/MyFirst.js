const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the HTTP status code to 200 (OK)
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Send "Hello World!" as the response
  res.end('Hello World!');
});

// Server listening on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});