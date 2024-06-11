// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as AgenciesWithCoverageAPI from './agencies-with-coverage';

export class AgenciesWithCoverage extends APIResource {
  /**
   * Retrieve Agencies with Coverage
   */
  retrieve(
    query: AgenciesWithCoverageRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgenciesWithCoverageRetrieveResponse> {
    return this._client.get('/api/where/agencies-with-coverage.json', { query, ...options });
  }
}

export interface AgenciesWithCoverageRetrieveResponse {
  code: number;

  currentTime: number;

  data: AgenciesWithCoverageRetrieveResponse.Data;

  text: string;

  version: number;
}

export namespace AgenciesWithCoverageRetrieveResponse {
  export interface Data {
    limitExceeded?: boolean;

    list?: Array<Data.List>;

    references?: Data.References;
  }

  export namespace Data {
    export interface List {
      agency: List.Agency;

      lat: number;

      latSpan: number;

      lon: number;

      lonSpan: number;
    }

    export namespace List {
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

export interface AgenciesWithCoverageRetrieveParams {
  key: string;
}

export namespace AgenciesWithCoverage {
  export import AgenciesWithCoverageRetrieveResponse = AgenciesWithCoverageAPI.AgenciesWithCoverageRetrieveResponse;
  export import AgenciesWithCoverageRetrieveParams = AgenciesWithCoverageAPI.AgenciesWithCoverageRetrieveParams;
}
