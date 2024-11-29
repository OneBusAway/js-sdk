// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
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

export declare namespace SearchForStop {
  export {
    type SearchForStopListResponse as SearchForStopListResponse,
    type SearchForStopListParams as SearchForStopListParams,
  };
}
