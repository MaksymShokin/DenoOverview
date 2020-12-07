const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from node');
});

server.listen(3000);
