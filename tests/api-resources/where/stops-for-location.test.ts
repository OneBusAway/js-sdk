// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenTransit from 'open-transit';
import { Response } from 'node-fetch';

const openTransit = new OpenTransit({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stopsForLocation', () => {
  test('list: only required params', async () => {
    const responsePromise = openTransit.where.stopsForLocation.list({ key: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await openTransit.where.stopsForLocation.list({ key: 'string', lat: 0, lon: 0 });
  });
});
