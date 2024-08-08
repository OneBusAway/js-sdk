// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as RouteAPI from './route';
import * as Shared from './shared';

export class Route extends APIResource {
  /**
   * Retrieve information for a specific route identified by its unique ID.
   */
  retrieve(routeId: string, options?: Core.RequestOptions): Core.APIPromise<RouteRetrieveResponse> {
    return this._client.get(`/api/where/route/${routeId}.json`, options);
  }
}

export interface RouteRetrieveResponse extends Shared.ResponseWrapper {
  data: RouteRetrieveResponse.Data;
}

export namespace RouteRetrieveResponse {
  export interface Data {
    entry: Data.Entry;

    references: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      id?: string;

      agencyId?: string;

      color?: string;

      description?: string;

      longName?: string;

      shortName?: string;

      textColor?: string;

      type?: number;

      url?: string;
    }
  }
}

export namespace Route {
  export import RouteRetrieveResponse = RouteAPI.RouteRetrieveResponse;
}
