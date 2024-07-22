// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as StopsForRouteAPI from './stops-for-route';
import * as Shared from './shared';

export class StopsForRoute extends APIResource {
  /**
   * Get stops for a specific route
   */
  list(
    routeId: string,
    query?: StopsForRouteListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StopsForRouteListResponse>;
  list(routeId: string, options?: Core.RequestOptions): Core.APIPromise<StopsForRouteListResponse>;
  list(
    routeId: string,
    query: StopsForRouteListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StopsForRouteListResponse> {
    if (isRequestOptions(query)) {
      return this.list(routeId, {}, query);
    }
    return this._client.get(`/api/where/stops-for-route/${routeId}.json`, { query, ...options });
  }
}

export interface StopsForRouteListResponse extends Shared.ResponseWrapper {
  data?: StopsForRouteListResponse.Data;
}

export namespace StopsForRouteListResponse {
  export interface Data {
    entry?: Data.Entry;

    references?: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      polylines?: Array<Entry.Polyline>;

      routeId?: string;

      stopGroupings?: Array<Entry.StopGrouping>;

      stopIds?: Array<string>;
    }

    export namespace Entry {
      export interface Polyline {
        length?: number;

        levels?: string;

        points?: string;
      }

      export interface StopGrouping {
        id?: string;

        name?: StopGrouping.Name;

        polylines?: Array<StopGrouping.Polyline>;

        stopIds?: Array<string>;
      }

      export namespace StopGrouping {
        export interface Name {
          name?: string;

          names?: Array<string>;

          type?: string;
        }

        export interface Polyline {
          length?: number;

          levels?: string;

          points?: string;
        }
      }
    }
  }
}

export interface StopsForRouteListParams {
  /**
   * Include polyline elements in the response (default true)
   */
  includePolylines?: boolean;

  /**
   * Specify service date (YYYY-MM-DD or epoch) (default today)
   */
  time?: string;
}

export namespace StopsForRoute {
  export import StopsForRouteListResponse = StopsForRouteAPI.StopsForRouteListResponse;
  export import StopsForRouteListParams = StopsForRouteAPI.StopsForRouteListParams;
}
