const request = require('supertest');
const { users } = require('../utils/test/seeds/user');
const { setupDb } = require('../utils/test/test-setup');

const server = require('./../server');
const { getInstance } = setupDb();

describe('GET /users/:id', () => {
  beforeAll(() => {
    const db = getInstance();
    db.collection('users').insertMany(users);
  });

  describe('when passed a valid id', () => {
    test('should return 200 status code', async () => {
      const response = await request(server).get('/users/user0');
      expect(response.statusCode).toBe(200);
      expect(response.body.data.age).toBe(58);
      expect(response.body.msg).toBe('User data fetched successfully');
    });
  });

  describe('when passed an invalid id', () => {
    test('should return 404 status code', async () => {
      const response = await request(server).get('/users/dummy');
      expect(response.statusCode).toBe(404);
    });
  });
});
