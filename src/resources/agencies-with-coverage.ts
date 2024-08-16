// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AgenciesWithCoverageAPI from './agencies-with-coverage';
import * as Shared from './shared';

export class AgenciesWithCoverage extends APIResource {
  /**
   * Returns a list of all transit agencies currently supported by OneBusAway along
   * with the center of their coverage area.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AgenciesWithCoverageListResponse> {
    return this._client.get('/api/where/agencies-with-coverage.json', options);
  }
}

export interface AgenciesWithCoverageListResponse extends Shared.ResponseWrapper {
  data: AgenciesWithCoverageListResponse.Data;
}

export namespace AgenciesWithCoverageListResponse {
  export interface Data {
    limitExceeded: boolean;

    list: Array<Data.List>;

    references: Shared.References;
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
  export import AgenciesWithCoverageListResponse = AgenciesWithCoverageAPI.AgenciesWithCoverageListResponse;
}
