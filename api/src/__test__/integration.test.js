const supertest = require('supertest');
const app = require('./../server.js');
const request = supertest(app);

describe('GET /test end point', () => {
  test('check respond with 201', async (done) => {
    try {
      await request
        .get('/test')
        .expect(204)
        .then((res) => {
          expect(res.body).toStrictEqual({});
          done();
        });
    } catch (e) {
      if (e) {
        console.log(e);
        done(e);
      }
    }
  });
});
