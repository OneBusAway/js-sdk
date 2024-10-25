// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SearchForRouteAPI from './search-for-route';
import * as Shared from './shared';

export class SearchForRoute extends APIResource {
  /**
   * Search for a route based on its name.
   */
  list(
    query: SearchForRouteListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchForRouteListResponse> {
    return this._client.get('/api/where/search/route.json', { query, ...options });
  }
}

export interface SearchForRouteListResponse extends Shared.ResponseWrapper {
  data?: SearchForRouteListResponse.Data;
}

export namespace SearchForRouteListResponse {
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

export interface SearchForRouteListParams {
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
  export type SearchForRouteListResponse = SearchForRouteAPI.SearchForRouteListResponse;
  export type SearchForRouteListParams = SearchForRouteAPI.SearchForRouteListParams;
}
