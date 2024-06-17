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
  ): Core.APIPromise<unknown> {
    return this._client.get('/api/where/agencies-with-coverage.json', { query, ...options });
  }
}

export type AgenciesWithCoverageRetrieveResponse = unknown;

export interface AgenciesWithCoverageRetrieveParams {
  key: string;
}

export namespace AgenciesWithCoverage {
  export import AgenciesWithCoverageRetrieveResponse = AgenciesWithCoverageAPI.AgenciesWithCoverageRetrieveResponse;
  export import AgenciesWithCoverageRetrieveParams = AgenciesWithCoverageAPI.AgenciesWithCoverageRetrieveParams;
}
