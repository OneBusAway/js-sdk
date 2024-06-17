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

  text: string;

  version: number;

  data?: AgenciesWithCoverageRetrieveResponse.Data;
}

export namespace AgenciesWithCoverageRetrieveResponse {
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

      routes?: Array<References.Route>;

      situations?: Array<unknown>;

      stops?: Array<unknown>;

      stopTimes?: Array<unknown>;

      trips?: Array<unknown>;
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

      export interface Route {
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
}

export interface AgenciesWithCoverageRetrieveParams {
  key: string;
}

export namespace AgenciesWithCoverage {
  export import AgenciesWithCoverageRetrieveResponse = AgenciesWithCoverageAPI.AgenciesWithCoverageRetrieveResponse;
  export import AgenciesWithCoverageRetrieveParams = AgenciesWithCoverageAPI.AgenciesWithCoverageRetrieveParams;
}
