// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as AgenciesWithCoverageAPI from './agencies-with-coverage';
import * as Shared from './shared';

export class AgenciesWithCoverage extends APIResource {
  /**
   * Retrieve Agencies with Coverage
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<AgenciesWithCoverageRetrieveResponse> {
    return this._client.get('/api/where/agencies-with-coverage.json', options);
  }
}

export interface AgenciesWithCoverageRetrieveResponse extends Shared.ResponseWrapper {
  data?: AgenciesWithCoverageRetrieveResponse.Data;
}

export namespace AgenciesWithCoverageRetrieveResponse {
  export interface Data {
    limitExceeded?: boolean;

    list?: Array<Data.List>;

    references?: Shared.References;
  }

  export namespace Data {
    export interface List {
      agencyId: string;

      lat: number;

      latSpan: number;

      lon: number;

      lonSpan: number;
    }
  }
}

export namespace AgenciesWithCoverage {
  export import AgenciesWithCoverageRetrieveResponse = AgenciesWithCoverageAPI.AgenciesWithCoverageRetrieveResponse;
}
