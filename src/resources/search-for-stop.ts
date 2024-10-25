// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SearchForStopAPI from './search-for-stop';
import * as Shared from './shared';

export class SearchForStop extends APIResource {
  /**
   * Search for a stop based on its name.
   */
  list(
    query: SearchForStopListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchForStopListResponse> {
    return this._client.get('/api/where/search/stop.json', { query, ...options });
  }
}

export interface SearchForStopListResponse extends Shared.ResponseWrapper {
  data?: SearchForStopListResponse.Data;
}

export namespace SearchForStopListResponse {
  export interface Data {
    limitExceeded: boolean;

    list: Array<Data.List>;

    outOfRange: boolean;

    references: Shared.References;
  }

  export namespace Data {
    export interface List {
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

export interface SearchForStopListParams {
  /**
   * The string to search for.
   */
  input: string;

  /**
   * The max number of results to return. Defaults to 20.
   */
  maxCount?: number;
}

export namespace SearchForStop {
  export type SearchForStopListResponse = SearchForStopAPI.SearchForStopListResponse;
  export type SearchForStopListParams = SearchForStopAPI.SearchForStopListParams;
}
