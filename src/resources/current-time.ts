// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CurrentTimeAPI from './current-time';
import * as Shared from './shared';

export class CurrentTime extends APIResource {
  /**
   * current-time
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<CurrentTimeRetrieveResponse> {
    return this._client.get('/api/where/current-time.json', options);
  }
}

export interface CurrentTimeRetrieveResponse extends Shared.ResponseWrapper {
  data?: CurrentTimeRetrieveResponse.Data;
}

export namespace CurrentTimeRetrieveResponse {
  export interface Data {
    entry: Data.Entry;

    references: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      readableTime?: string;

      time?: number;
    }
  }
}

export namespace CurrentTime {
  export import CurrentTimeRetrieveResponse = CurrentTimeAPI.CurrentTimeRetrieveResponse;
}
