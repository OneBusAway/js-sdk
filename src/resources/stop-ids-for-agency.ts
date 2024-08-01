// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as StopIDsForAgencyAPI from './stop-ids-for-agency';
import * as Shared from './shared';

export class StopIDsForAgency extends APIResource {
  /**
   * Get stop IDs for a specific agency
   */
  list(agencyId: string, options?: Core.RequestOptions): Core.APIPromise<StopIDsForAgencyListResponse> {
    return this._client.get(`/api/where/stop-ids-for-agency/agencyID.json`, options);
  }
}

export interface StopIDsForAgencyListResponse extends Shared.ResponseWrapper {
  data: StopIDsForAgencyListResponse.Data;
}

export namespace StopIDsForAgencyListResponse {
  export interface Data {
    list: Array<string>;

    references: Shared.References;

    limitExceeded?: boolean;
  }
}

export namespace StopIDsForAgency {
  export import StopIDsForAgencyListResponse = StopIDsForAgencyAPI.StopIDsForAgencyListResponse;
}
