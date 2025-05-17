// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Stop extends APIResource {
  /**
   * Get details of a specific stop
   */
  retrieve(stopId: string, options?: Core.RequestOptions): Core.APIPromise<StopRetrieveResponse> {
    return this._client.get(`/api/where/stop/${stopId}.json`, options);
  }
}

export interface StopRetrieveResponse extends Shared.ResponseWrapper {
  data: StopRetrieveResponse.Data;
}

export namespace StopRetrieveResponse {
  export interface Data {
    entry: Data.Entry;

    references: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      id: string;

      lat: number;

      locationType: number;

      lon: number;

      name: string;

      parent: string;

      routeIds: Array<string>;

      staticRouteIds: Array<string>;

      code?: string;

      direction?: string;

      wheelchairBoarding?: string;
    }
  }
}

export declare namespace Stop {
  export { type StopRetrieveResponse as StopRetrieveResponse };
}
