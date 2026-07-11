// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class RoutesForLocation extends APIResource {
  /**
   * routes-for-location
   */
  list(
    query?: RoutesForLocationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutesForLocationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<RoutesForLocationListResponse>;
  list(
    query: RoutesForLocationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutesForLocationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/where/routes-for-location.json', { query, ...options });
  }
}

export interface RoutesForLocationListResponse extends Shared.ResponseWrapper {
  data: RoutesForLocationListResponse.Data;
}

export namespace RoutesForLocationListResponse {
  export interface Data {
    list: Array<Data.List>;

    outOfRange: boolean;

    references: Shared.References;

    limitExceeded?: boolean;
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
  /**
   * If omitted, defaults to 0.0.
   */
  lat?: number;

  latSpan?: number;

  /**
   * If omitted, defaults to 0.0.
   */
  lon?: number;

  lonSpan?: number;

  query?: string;

  radius?: number;
}

export declare namespace RoutesForLocation {
  export {
    type RoutesForLocationListResponse as RoutesForLocationListResponse,
    type RoutesForLocationListParams as RoutesForLocationListParams,
  };
}
