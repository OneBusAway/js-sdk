// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ConfigAPI from './config';

export class Config extends APIResource {
  /**
   * config
   */
  retrieve(
    query: ConfigRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigRetrieveResponse> {
    return this._client.get('/api/where/config.json', { query, ...options });
  }
}

export interface ConfigRetrieveResponse {
  code: number;

  currentTime: number;

  text: string;

  version: number;
}

export interface ConfigRetrieveParams {
  key: string;
}

export namespace Config {
  export import ConfigRetrieveResponse = ConfigAPI.ConfigRetrieveResponse;
  export import ConfigRetrieveParams = ConfigAPI.ConfigRetrieveParams;
}
