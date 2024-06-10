// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as AgenciesWithCoverageAPI from './agencies-with-coverage';

export class AgenciesWithCoverage extends APIResource {
  /**
   * agencies-with-coverage
   */
  retrieve(query: AgenciesWithCoverageRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/where/agencies-with-coverage.json', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AgenciesWithCoverageRetrieveParams {
  key: string;
}

export namespace AgenciesWithCoverage {
  export import AgenciesWithCoverageRetrieveParams = AgenciesWithCoverageAPI.AgenciesWithCoverageRetrieveParams;
}
