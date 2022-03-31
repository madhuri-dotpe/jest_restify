const { users: userSeed } = require('../utils/test/seeds/user');
const user = require('./user');
const { setupDb } = require('../utils/test/test-setup');
const { getInstance } = setupDb();
describe('user service', () => {
  beforeAll(() => {
    const db = getInstance();
    db.collection('users').insertMany(userSeed);
  });

  describe('when no username is passed', () => {
    test('should return validation error', (done) => {
      function callback(err, user) {
        expect(err).toBe('INVALID_USERNAME');
        expect(user).toBeUndefined();
        done();
      }
      user.getUser(null, callback);
    });
  });

  describe('when passed a valid username', () => {
    test('should return user object', (done) => {
      function callback(err, user) {
        expect(err).toBeNull();
        expect(user.age).toBe(58);
        done();
      }
      user.getUser('user0', callback);
    });
  });

  describe('when passed non-existent username', () => {
    test('should return null', (done) => {
      function callback(err, user) {
        expect(err).toBeNull();
        expect(user).toBeNull();
        done();
      }
      user.getUser('user1', callback);
    });
  });
});
