// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as RouteIDsForAgencyAPI from './route-ids-for-agency';
import * as Shared from './shared';

export class RouteIDsForAgency extends APIResource {
  /**
   * Get route IDs for a specific agency
   */
  list(agencyId: string, options?: Core.RequestOptions): Core.APIPromise<RouteIDsForAgencyListResponse> {
    return this._client.get(`/api/where/route-ids-for-agency/agencyID.json`, options);
  }
}

export interface RouteIDsForAgencyListResponse extends Shared.ResponseWrapper {
  data: RouteIDsForAgencyListResponse.Data;
}

export namespace RouteIDsForAgencyListResponse {
  export interface Data {
    list: Array<string>;

    references: Shared.References;

    limitExceeded?: boolean;
  }
}

export namespace RouteIDsForAgency {
  export import RouteIDsForAgencyListResponse = RouteIDsForAgencyAPI.RouteIDsForAgencyListResponse;
}
