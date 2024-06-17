// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as StopsForLocationAPI from './stops-for-location';

export class StopsForLocation extends APIResource {
  /**
   * stops-for-location
   */
  retrieve(
    query: StopsForLocationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StopsForLocationRetrieveResponse> {
    return this._client.get('/api/where/stops-for-location.json', { query, ...options });
  }
}

export interface StopsForLocationRetrieveResponse {
  code: number;

  currentTime: number;

  text: string;

  version: number;

  data?: StopsForLocationRetrieveResponse.Data;
}

export namespace StopsForLocationRetrieveResponse {
  export interface Data {
    entry?: unknown;

    references?: Data.References;
  }

  export namespace Data {
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

export interface StopsForLocationRetrieveParams {
  key: string;

  lat?: number;

  lon?: number;
}

export namespace StopsForLocation {
  export import StopsForLocationRetrieveResponse = StopsForLocationAPI.StopsForLocationRetrieveResponse;
  export import StopsForLocationRetrieveParams = StopsForLocationAPI.StopsForLocationRetrieveParams;
}
