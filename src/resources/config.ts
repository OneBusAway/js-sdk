// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ConfigAPI from './config';

export class Config extends APIResource {
  /**
   * config
   */
  retrieve(query: ConfigRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/api/where/config.json', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ConfigRetrieveParams {
  key: string;
}

export namespace Config {
  export import ConfigRetrieveParams = ConfigAPI.ConfigRetrieveParams;
}
