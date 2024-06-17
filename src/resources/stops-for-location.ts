// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as StopsForLocationAPI from './stops-for-location';

export class StopsForLocation extends APIResource {
  /**
   * stops-for-location
   */
  retrieve(query: StopsForLocationRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/api/where/stops-for-location.json', { query, ...options });
  }
}

export type StopsForLocationRetrieveResponse = unknown;

export interface StopsForLocationRetrieveParams {
  key: string;

  lat?: number;

  lon?: number;
}

export namespace StopsForLocation {
  export import StopsForLocationRetrieveResponse = StopsForLocationAPI.StopsForLocationRetrieveResponse;
  export import StopsForLocationRetrieveParams = StopsForLocationAPI.StopsForLocationRetrieveParams;
}
