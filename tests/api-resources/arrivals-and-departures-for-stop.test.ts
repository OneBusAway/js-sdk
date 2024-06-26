// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnebusawaySDK from 'onebusaway-sdk';
import { Response } from 'node-fetch';

const onebusawaySDK = new OnebusawaySDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource arrivalsAndDeparturesForStop', () => {
  test('retrieve', async () => {
    const responsePromise = onebusawaySDK.arrivalsAndDeparturesForStop.retrieve('1_75403');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      onebusawaySDK.arrivalsAndDeparturesForStop.retrieve('1_75403', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(OnebusawaySDK.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      onebusawaySDK.arrivalsAndDeparturesForStop.retrieve(
        '1_75403',
        { minutesAfter: 0, minutesBefore: 0, time: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OnebusawaySDK.NotFoundError);
  });
});
