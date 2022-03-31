const MongoDbClient = require('./../db');

const getUser = (username, cb) => {
  if (!username) {
    return cb('INVALID_USERNAME');
  }

  const db = MongoDbClient.db('test');
  db.collection('users').findOne({ username }, {}, cb);
};

module.exports = {
  getUser
};
