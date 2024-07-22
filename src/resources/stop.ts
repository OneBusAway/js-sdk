// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as StopAPI from './stop';
import * as Shared from './shared';

export class Stop extends APIResource {
  /**
   * Retrieve information for a specific stop identified by its unique ID.
   */
  retrieve(stopId: string, options?: Core.RequestOptions): Core.APIPromise<StopRetrieveResponse> {
    return this._client.get(`/api/where/stop/stopID.json`, options);
  }
}

export interface StopRetrieveResponse extends Shared.ResponseWrapper {
  data?: StopRetrieveResponse.Data;
}

export namespace StopRetrieveResponse {
  export interface Data {
    data?: Data.Data;
  }

  export namespace Data {
    export interface Data {
      entry?: Data.Entry;

      references?: Shared.References;
    }

    export namespace Data {
      export interface Entry {
        id: string;

        code: string;

        lat: number;

        lon: number;

        name: string;

        direction?: string;

        locationType?: number;

        parent?: string;

        routeIds?: Array<string>;

        staticRouteIds?: Array<string>;

        wheelchairBoarding?: string;
      }
    }
  }
}

export namespace Stop {
  export import StopRetrieveResponse = StopAPI.StopRetrieveResponse;
}
