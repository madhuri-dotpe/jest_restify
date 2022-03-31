const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';

const MongoDbClient = {
  init: function () {
    MongoClient.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      function (err, client) {
        MongoDbClient.instance = client;
      }
    );
  },

  db: function (schema) {
    if (MongoDbClient.instance) {
      return MongoDbClient.instance.db(schema);
    }
  },

  close: function(){
    if(MongoDbClient.instance) {
      MongoDbClient.instance.close();
    }
  }
};

module.exports = MongoDbClient;
