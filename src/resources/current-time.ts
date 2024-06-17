// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as CurrentTimeAPI from './current-time';

export class CurrentTime extends APIResource {
  /**
   * current-time
   */
  retrieve(query: CurrentTimeRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/api/where/current-time.json', { query, ...options });
  }
}

export type CurrentTimeRetrieveResponse = unknown;

export interface CurrentTimeRetrieveParams {
  key: string;
}

export namespace CurrentTime {
  export import CurrentTimeRetrieveResponse = CurrentTimeAPI.CurrentTimeRetrieveResponse;
  export import CurrentTimeRetrieveParams = CurrentTimeAPI.CurrentTimeRetrieveParams;
}
