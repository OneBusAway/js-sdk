// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OneBusAway from 'onebusaway';
import { Response } from 'node-fetch';

const oneBusAway = new OneBusAway({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stopsForLocation', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = oneBusAway.stopsForLocation.retrieve({ key: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await oneBusAway.stopsForLocation.retrieve({ key: 'string', lat: 0, lon: 0 });
  });
});
