// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as AgenciesWithCoverageAPI from './agencies-with-coverage';

export class AgenciesWithCoverage extends APIResource {
  /**
   * Retrieve Agencies with Coverage
   */
  get(
    query: AgenciesWithCoverageGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgenciesWithCoverageGetResponse> {
    return this._client.get('/api/where/agencies-with-coverage.json', { query, ...options });
  }
}

export interface AgenciesWithCoverageGetResponse {
  code: number;

  currentTime: number;

  data: AgenciesWithCoverageGetResponse.Data;

  text: string;

  version: number;
}

export namespace AgenciesWithCoverageGetResponse {
  export interface Data {
    limitExceeded?: boolean;

    list?: Array<Data.List>;

    references?: Data.References;
  }

  export namespace Data {
    export interface List {
      agencyId: string;

      lat: number;

      latSpan: number;

      lon: number;

      lonSpan: number;
    }

    export interface References {
      agencies?: Array<References.Agency>;
    }

    export namespace References {
      export interface Agency {
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
}

export interface AgenciesWithCoverageGetParams {
  key: string;
}

export namespace AgenciesWithCoverage {
  export import AgenciesWithCoverageGetResponse = AgenciesWithCoverageAPI.AgenciesWithCoverageGetResponse;
  export import AgenciesWithCoverageGetParams = AgenciesWithCoverageAPI.AgenciesWithCoverageGetParams;
}
