// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as RoutesForAgencyAPI from './routes-for-agency';
import * as Shared from './shared';

export class RoutesForAgency extends APIResource {
  /**
   * Retrieve the list of all routes for a particular agency by id
   */
  list(agencyId: string, options?: Core.RequestOptions): Core.APIPromise<RoutesForAgencyListResponse> {
    return this._client.get(`/api/where/routes-for-agency/agencyID.json`, options);
  }
}

export interface RoutesForAgencyListResponse extends Shared.ResponseWrapper {
  data: RoutesForAgencyListResponse.Data;
}

export namespace RoutesForAgencyListResponse {
  export interface Data {
    limitExceeded: boolean;

    list: Array<Data.List>;

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

export namespace RoutesForAgency {
  export import RoutesForAgencyListResponse = RoutesForAgencyAPI.RoutesForAgencyListResponse;
}
