// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/open-transit/core';
import { APIResource } from '@stainless-temp/open-transit/resource';
import { isRequestOptions } from '@stainless-temp/open-transit/core';
import * as CurrentTimeAPI from '@stainless-temp/open-transit/resources/current-time';

export class CurrentTime extends APIResource {
  /**
   * current-time
   */
  retrieve(query?: CurrentTimeRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<void>;
  retrieve(
    query: CurrentTimeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/api/where/current-time.json', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CurrentTimeRetrieveParams {
  key?: string;
}

export namespace CurrentTime {
  export import CurrentTimeRetrieveParams = CurrentTimeAPI.CurrentTimeRetrieveParams;
}
