const supertest = require('supertest');
const app = require('./../server.js');
const request = supertest(app);
const Helpers = require('../utils/helpers');

describe('test storyblock table', () => {
  test('user adds record', async (done) => {
    try {
      await request
        .post('/storyblock')
        .send({ content: 'NEW Test ', story_id: 2 })
        .expect(200)
        .then((res) => {
          done();
        });
      done();
    } catch (error) {}
  });
});

describe('GET /test end point', () => {
  test('check respond with 204', async (done) => {
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
        done();
      }
    }
  });
  test('check if responds with 400 when send data', async (done) => {
    try {
      await request
        .get('/test')
        .query({ id: null })
        .expect(400)
        .then((res) => {
          // console.log(res);
          done();
        });
    } catch (e) {
      if (e) {
        console.log(e);
        done(e);
        done();
      }
    }
  });
});

describe('POST /test end point', () => {
  test('respond with 201 if got object', async (done) => {
    try {
      await request
        .post('/test')
        .send({ data: [] })
        .expect(201)
        .then((res) => {
          done();
        });
    } catch (e) {
      if (e) {
        console.log(e);
        done(e);
        done();
      }
    }
  });
  test('respond with 400 if send no object', async (done) => {
    try {
      await request
        .post('/test')
        .expect(400)
        .then((res) => {
          done();
        });
    } catch (e) {
      if (e) {
        console.log(e);
        done(e);
        done();
      }
    }
  });
});
