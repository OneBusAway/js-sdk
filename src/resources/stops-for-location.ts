// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as StopsForLocationAPI from './stops-for-location';
import * as Shared from './shared';

export class StopsForLocation extends APIResource {
  /**
   * stops-for-location
   */
  list(
    query: StopsForLocationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StopsForLocationListResponse> {
    return this._client.get('/api/where/stops-for-location.json', { query, ...options });
  }
}

export interface StopsForLocationListResponse extends Shared.ResponseWrapper {
  data: StopsForLocationListResponse.Data;
}

export namespace StopsForLocationListResponse {
  export interface Data {
    limitExceeded: boolean;

    list: Array<Data.List>;

    references: Shared.References;
  }

  export namespace Data {
    export interface List {
      id: string;

      lat: number;

      lon: number;

      name: string;

      parent: string;

      routeIds: Array<string>;

      staticRouteIds: Array<string>;

      code?: string;

      direction?: string;

      locationType?: number;

      wheelchairBoarding?: string;
    }
  }
}

export interface StopsForLocationListParams {
  lat: number;

  lon: number;

  /**
   * An alternative to radius to set the search bounding box (optional)
   */
  latSpan?: number;

  /**
   * An alternative to radius to set the search bounding box (optional)
   */
  lonSpan?: number;

  /**
   * A search query string to filter the results
   */
  query?: string;

  /**
   * The radius in meters to search within
   */
  radius?: number;
}

export namespace StopsForLocation {
  export type StopsForLocationListResponse = StopsForLocationAPI.StopsForLocationListResponse;
  export type StopsForLocationListParams = StopsForLocationAPI.StopsForLocationListParams;
}
