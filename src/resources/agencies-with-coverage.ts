// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';

export class AgenciesWithCoverage extends APIResource {
  /**
   * agencies-with-coverage
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/where/agencies-with-coverage.json', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
