// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/open-transit/core';
import { APIResource } from '@stainless-temp/open-transit/resource';
import { isRequestOptions } from '@stainless-temp/open-transit/core';
import * as AgenciesWithCoverageAPI from '@stainless-temp/open-transit/resources/agencies-with-coverage';

export class AgenciesWithCoverage extends APIResource {
  /**
   * agencies-with-coverage
   */
  list(query?: AgenciesWithCoverageListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    query: AgenciesWithCoverageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/where/agencies-with-coverage.json', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AgenciesWithCoverageListParams {
  key?: string;
}

export namespace AgenciesWithCoverage {
  export import AgenciesWithCoverageListParams = AgenciesWithCoverageAPI.AgenciesWithCoverageListParams;
}
