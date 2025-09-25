import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import app from '../src/app.js';
import { connectDB } from '../config/db.js';
import jwt from 'jsonwebtoken';

function getToken() {
  return jwt.sign({ sub: 'test', role: 'admin', username: 'admin' }, 'testsecret', { expiresIn: '1h' });
}

describe('Projects API', () => {
  let mongo;
  const OLD_ENV = process.env;

  beforeAll(async () => {
    mongo = await MongoMemoryServer.create();
    process.env = { ...OLD_ENV, MONGO_URI: mongo.getUri(), JWT_SECRET: 'testsecret' };
    await connectDB();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    if (mongo) await mongo.stop();
    process.env = OLD_ENV;
  });

  it('GET /api/projects should return empty array initially', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });

  it('POST /api/projects should create project with auth', async () => {
    const token = getToken();
    const res = await request(app)
      .post('/api/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Project',
        description: 'Just for testing',
        techStack: ['Jest'],
      });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Test Project');
  });

  it('PUT /api/projects/:id should update project with auth', async () => {
    const token = getToken();
    const created = await request(app)
      .post('/api/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'A', description: 'B' });

    const res = await request(app)
      .put(`/api/projects/${created.body._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Updated', description: 'B' });
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Updated');
  });

  it('DELETE /api/projects/:id should delete project with auth', async () => {
    const token = getToken();
    const created = await request(app)
      .post('/api/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Del', description: 'X' });

    const res = await request(app)
      .delete(`/api/projects/${created.body._id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(204);
  });
});

