const restify = require('restify');
const userController = require('./controller/user');
const MongoDbClient = require('./db');

// Skip initializing mongodb in test mode
if(!process.env.JEST_WORKER_ID) {
  MongoDbClient.init();
}

const server = restify.createServer();
server.get('/users/:id', userController.getUser);

server.close(() => {
  MongoDbClient.close();
})
module.exports = server;
