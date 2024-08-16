// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnebusawaySDK from 'onebusaway-sdk';
import { Response } from 'node-fetch';

const client = new OnebusawaySDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tripsForLocation', () => {
  test('list: only required params', async () => {
    const responsePromise = client.tripsForLocation.list({ lat: 0, latSpan: 0, lon: 0, lonSpan: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.tripsForLocation.list({
      lat: 0,
      latSpan: 0,
      lon: 0,
      lonSpan: 0,
      includeSchedule: true,
      includeTrip: true,
      time: 0,
    });
  });
});
