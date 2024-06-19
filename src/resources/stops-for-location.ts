// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as StopsForLocationAPI from './stops-for-location';
import * as Shared from './shared';

export class StopsForLocation extends APIResource {
  /**
   * stops-for-location
   */
  retrieve(
    query: StopsForLocationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StopsForLocationRetrieveResponse> {
    return this._client.get('/api/where/stops-for-location.json', { query, ...options });
  }
}

export interface StopsForLocationRetrieveResponse extends Shared.ResponseWrapper {
  data?: StopsForLocationRetrieveResponse.Data;
}

export namespace StopsForLocationRetrieveResponse {
  export interface Data {
    limitExceeded?: boolean;

    list?: Array<Data.List>;

    references?: Shared.References;
  }

  export namespace Data {
    export interface List {
      id?: string;

      code?: string;

      direction?: string;

      lat?: number;

      locationType?: number;

      lon?: number;

      name?: string;

      parent?: string;

      routeIds?: Array<string>;

      staticRouteIds?: Array<string>;

      wheelchairBoarding?: string;
    }
  }
}

export interface StopsForLocationRetrieveParams {
  key: string;

  lat?: number;

  lon?: number;
}

export namespace StopsForLocation {
  export import StopsForLocationRetrieveResponse = StopsForLocationAPI.StopsForLocationRetrieveResponse;
  export import StopsForLocationRetrieveParams = StopsForLocationAPI.StopsForLocationRetrieveParams;
}
