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

  data?: ConfigRetrieveResponse.Data;
}

export namespace ConfigRetrieveResponse {
  export interface Data {
    entry?: Data.Entry;
  }

  export namespace Data {
    export interface Entry {
      id?: string;

      gitProperties?: Entry.GitProperties;

      name?: string;

      serviceDateFrom?: string;

      serviceDateTo?: string;
    }

    export namespace Entry {
      export interface GitProperties {
        'git.branch'?: string;

        'git.build.host'?: string;

        'git.build.time'?: string;

        'git.build.user.email'?: string;

        'git.build.user.name'?: string;

        'git.build.version'?: string;

        'git.closest.tag.commit.count'?: string;

        'git.closest.tag.name'?: string;

        'git.commit.id'?: string;

        'git.commit.id.abbrev'?: string;

        'git.commit.id.describe'?: string;

        'git.commit.id.describe-short'?: string;

        'git.commit.message.full'?: string;

        'git.commit.message.short'?: string;

        'git.commit.time'?: string;

        'git.commit.user.email'?: string;

        'git.commit.user.name'?: string;

        'git.dirty'?: string;

        'git.remote.origin.url'?: string;

        'git.tags'?: string;
      }
    }
  }
}

export interface ConfigRetrieveParams {
  key: string;
}

export namespace Config {
  export import ConfigRetrieveResponse = ConfigAPI.ConfigRetrieveResponse;
  export import ConfigRetrieveParams = ConfigAPI.ConfigRetrieveParams;
}
