// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnebusawaySDK from 'onebusaway';
import { Response } from 'node-fetch';

const onebusawaySDK = new OnebusawaySDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource arrivalAndDepartureForStop', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = onebusawaySDK.arrivalAndDepartureForStop.retrieve('1_75403', {
      serviceDate: 0,
      tripId: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await onebusawaySDK.arrivalAndDepartureForStop.retrieve('1_75403', {
      serviceDate: 0,
      tripId: 'string',
      stopSequence: 0,
      time: 0,
      vehicleId: 'string',
    });
  });
});
