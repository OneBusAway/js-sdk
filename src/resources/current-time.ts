// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as CurrentTimeAPI from './current-time';

export class CurrentTime extends APIResource {
  /**
   * current-time
   */
  get(query: CurrentTimeGetParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/where/current-time.json', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CurrentTimeGetParams {
  key: string;
}

export namespace CurrentTime {
  export import CurrentTimeGetParams = CurrentTimeAPI.CurrentTimeGetParams;
}
