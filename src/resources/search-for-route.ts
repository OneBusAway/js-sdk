// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SearchForRouteAPI from './search-for-route';
import * as Shared from './shared';

export class SearchForRoute extends APIResource {
  /**
   * Search for a route based on its name.
   */
  retrieve(
    query: SearchForRouteRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchForRouteRetrieveResponse> {
    return this._client.get('/api/where/search/route.json', { query, ...options });
  }
}

export interface SearchForRouteRetrieveResponse extends Shared.ResponseWrapper {
  data?: SearchForRouteRetrieveResponse.Data;
}

export namespace SearchForRouteRetrieveResponse {
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

export interface SearchForRouteRetrieveParams {
  /**
   * The string to search for.
   */
  input: string;

  /**
   * The max number of results to return. Defaults to 20.
   */
  maxCount?: number;
}

export namespace SearchForRoute {
  export import SearchForRouteRetrieveResponse = SearchForRouteAPI.SearchForRouteRetrieveResponse;
  export import SearchForRouteRetrieveParams = SearchForRouteAPI.SearchForRouteRetrieveParams;
}
