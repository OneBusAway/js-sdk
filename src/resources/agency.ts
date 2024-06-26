// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AgencyAPI from './agency';
import * as Shared from './shared';

export class Agency extends APIResource {
  /**
   * Retrieve information for a specific transit agency identified by its unique ID.
   */
  retrieve(
    agencyId: string,
    query: AgencyRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgencyRetrieveResponse> {
    return this._client.get(`/api/where/agency/agencyID.json`, { query, ...options });
  }
}

export interface AgencyRetrieveResponse extends Shared.ResponseWrapper {
  data?: AgencyRetrieveResponse.Data;
}

export namespace AgencyRetrieveResponse {
  export interface Data {
    entry?: Data.Entry;

    limitExceeded?: boolean;
  }

  export namespace Data {
    export interface Entry {
      id: string;

      name: string;

      timezone: string;

      url: string;

      disclaimer?: string;

      email?: string;

      fareUrl?: string;

      lang?: string;

      phone?: string;

      privateService?: boolean;
    }
  }
}

export interface AgencyRetrieveParams {
  /**
   * API key for authentication.
   */
  key: string;
}

export namespace Agency {
  export import AgencyRetrieveResponse = AgencyAPI.AgencyRetrieveResponse;
  export import AgencyRetrieveParams = AgencyAPI.AgencyRetrieveParams;
}
