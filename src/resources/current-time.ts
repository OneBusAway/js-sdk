// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as CurrentTimeAPI from './current-time';

export class CurrentTime extends APIResource {
  /**
   * current-time
   */
  retrieve(
    query: CurrentTimeRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrentTimeRetrieveResponse> {
    return this._client.get('/api/where/current-time.json', { query, ...options });
  }
}

export interface CurrentTimeRetrieveResponse {
  code: number;

  currentTime: number;

  text: string;

  version: number;

  data?: CurrentTimeRetrieveResponse.Data;
}

export namespace CurrentTimeRetrieveResponse {
  export interface Data {
    entry?: Data.Entry;

    references?: Data.References;
  }

  export namespace Data {
    export interface Entry {
      readableTime?: string;

      time?: number;
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

export interface CurrentTimeRetrieveParams {
  key: string;
}

export namespace CurrentTime {
  export import CurrentTimeRetrieveResponse = CurrentTimeAPI.CurrentTimeRetrieveResponse;
  export import CurrentTimeRetrieveParams = CurrentTimeAPI.CurrentTimeRetrieveParams;
}
