// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as RoutesForLocationAPI from './routes-for-location';
import * as Shared from './shared';

export class RoutesForLocation extends APIResource {
  /**
   * routes-for-location
   */
  retrieve(
    query: RoutesForLocationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutesForLocationRetrieveResponse> {
    return this._client.get('/api/where/routes-for-location.json', { query, ...options });
  }
}

export interface RoutesForLocationRetrieveResponse extends Shared.ResponseWrapper {
  data: RoutesForLocationRetrieveResponse.Data;
}

export namespace RoutesForLocationRetrieveResponse {
  export interface Data {
    limitExceeded: boolean;

    list: Array<Data.List>;

    outOfRange: boolean;

    references: Shared.References;
  }

  export namespace Data {
    export interface List {
      id?: string;

      agencyId?: string;

      color?: string;

      description?: string;

      longName?: string;

      nullSafeShortName?: string;

      shortName?: string;

      textColor?: string;

      type?: number;

      url?: string;
    }
  }
}

export interface RoutesForLocationRetrieveParams {
  lat: number;

  lon: number;

  latSpan?: number;

  lonSpan?: number;

  query?: string;

  radius?: number;
}

export namespace RoutesForLocation {
  export import RoutesForLocationRetrieveResponse = RoutesForLocationAPI.RoutesForLocationRetrieveResponse;
  export import RoutesForLocationRetrieveParams = RoutesForLocationAPI.RoutesForLocationRetrieveParams;
}
