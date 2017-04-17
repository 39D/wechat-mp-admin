require('isomorphic-fetch');
const http = require('http');

const app = require('./lib/app');
const config = require('./config');

const server = http.createServer(app);

server.listen(config.port);

server.on('error', (err) => {
  console.log(`[Server] Error occured ${err}`);
});

server.on('listening', () => {
  console.log(`[Server] Starting on port ${config.port}`);
});