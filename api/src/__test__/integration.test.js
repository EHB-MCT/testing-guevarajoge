const supertest = require('supertest');
const app = require('./../server.js');
const request = supertest(app);

describe('GET /test end point', () => {
  test('check respond with 201', async (done) => {
    try {
      const response = await request.get('/test');
      expect(response.status).toBe(200, done());
    } catch (e) {
      if (e) {
        console.log(e);
        done(e);
      }
    }
  });
});
