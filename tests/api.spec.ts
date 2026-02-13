import { test, expect } from './fixtures';

test.describe('API Scenarios', () => {
  const BASE_URL = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

  test('GET /posts/1 returns 200', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`, {
      headers: {
        'Accept': 'application/json',
      }
    });
    
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
  });

  test('POST /posts creates a new resource', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/posts`, {
      data: { title: 'Playwright', body: 'Test', userId: 1 }
    });

    expect(response.status()).toBe(201);
  });
});