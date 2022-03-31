const { MongoClient } = require('mongodb');
const MongoDbClient = require('../../db');

const setupDb = (dbname) => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    db = await connection.db(dbname);

    // all connections are redirected to the memory server using the mock function
    MongoDbClient.db = jest.fn(() => db);
  });

  afterAll(async () => {
    await connection.close();
  });

  const getInstance = () => {
    return db;
  };

  return {
    getInstance
  };
};

module.exports = {
  setupDb
};
