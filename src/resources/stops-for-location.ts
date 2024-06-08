// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as StopsForLocationAPI from './stops-for-location';

export class StopsForLocation extends APIResource {
  /**
   * stops-for-location
   */
  list(query?: StopsForLocationListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    query: StopsForLocationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/where/stops-for-location.json', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface StopsForLocationListParams {
  key?: string;

  lat?: number;

  lon?: number;
}

export namespace StopsForLocation {
  export import StopsForLocationListParams = StopsForLocationAPI.StopsForLocationListParams;
}
