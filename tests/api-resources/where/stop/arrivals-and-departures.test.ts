// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenTransit from 'open-transit';
import { Response } from 'node-fetch';

const openTransit = new OpenTransit({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource arrivalsAndDepartures', () => {
  test('list', async () => {
    const responsePromise = openTransit.where.stop.arrivalsAndDepartures.list('1_75403');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      openTransit.where.stop.arrivalsAndDepartures.list('1_75403', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(OpenTransit.NotFoundError);
  });
});
