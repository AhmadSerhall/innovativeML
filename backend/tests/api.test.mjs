import request from 'supertest';
import app from '../index.js'; // Assuming this is your Express app

describe('Authentication Endpoints', () => {
  it('POST /auth/register should register a new user', async () => {
    const userData = {
      first_name: 'first name',
      last_name: 'last name',
      email: 'testuser@example.com',
      username: 'testuser',
      password: 'password123',
    };

    const response = await request(app)
      .post('/auth/register')
      .send(userData)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body.username).toBe(userData.username);
    expect(response.body.email).toBe(userData.email);
  });

  // Login Test
  it('POST /auth/login should authenticate a user', async () => {
    const credentials = {
      username: 'testuser@example.com',
      password: 'password123',
    };

    const response = await request(app)
      .post('/auth/login')
      .send(credentials)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.username).toBe('testuser');
    expect(response.body.email).toBe(credentials.email);
  });
});
