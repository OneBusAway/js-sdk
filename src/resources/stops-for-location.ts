// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as StopsForLocationAPI from './stops-for-location';

export class StopsForLocation extends APIResource {
  /**
   * stops-for-location
   */
  get(query: StopsForLocationGetParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/where/stops-for-location.json', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface StopsForLocationGetParams {
  key: string;

  lat?: number;

  lon?: number;
}

export namespace StopsForLocation {
  export import StopsForLocationGetParams = StopsForLocationAPI.StopsForLocationGetParams;
}
