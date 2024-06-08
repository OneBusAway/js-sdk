// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as AgenciesWithCoverageAPI from './agencies-with-coverage';

export class AgenciesWithCoverage extends APIResource {
  /**
   * agencies-with-coverage
   */
  retrive(query?: AgenciesWithCoverageRetriveParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  retrive(options?: Core.RequestOptions): Core.APIPromise<void>;
  retrive(
    query: AgenciesWithCoverageRetriveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.retrive({}, query);
    }
    return this._client.get('/api/where/agencies-with-coverage.json', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AgenciesWithCoverageRetriveParams {
  key?: string;
}

export namespace AgenciesWithCoverage {
  export import AgenciesWithCoverageRetriveParams = AgenciesWithCoverageAPI.AgenciesWithCoverageRetriveParams;
}
