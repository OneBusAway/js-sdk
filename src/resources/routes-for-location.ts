// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as RoutesForLocationAPI from './routes-for-location';
import * as Shared from './shared';

export class RoutesForLocation extends APIResource {
  /**
   * routes-for-location
   */
  list(
    query: RoutesForLocationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutesForLocationListResponse> {
    return this._client.get('/api/where/routes-for-location.json', { query, ...options });
  }
}

export interface RoutesForLocationListResponse extends Shared.ResponseWrapper {
  data: RoutesForLocationListResponse.Data;
}

export namespace RoutesForLocationListResponse {
  export interface Data {
    limitExceeded: boolean;

    list: Array<Data.List>;

    outOfRange: boolean;

    references: Shared.References;
  }

  export namespace Data {
    export interface List {
      id: string;

      agencyId: string;

      type: number;

      color?: string;

      description?: string;

      longName?: string;

      nullSafeShortName?: string;

      shortName?: string;

      textColor?: string;

      url?: string;
    }
  }
}

export interface RoutesForLocationListParams {
  lat: number;

  lon: number;

  latSpan?: number;

  lonSpan?: number;

  query?: string;

  radius?: number;
}

export namespace RoutesForLocation {
  export type RoutesForLocationListResponse = RoutesForLocationAPI.RoutesForLocationListResponse;
  export type RoutesForLocationListParams = RoutesForLocationAPI.RoutesForLocationListParams;
}
