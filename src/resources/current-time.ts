// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';

export class CurrentTime extends APIResource {
  /**
   * current-time
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/where/current-time.json', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
