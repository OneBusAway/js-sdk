// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as CurrentTimeAPI from './current-time';

export class CurrentTime extends APIResource {
  /**
   * current-time
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<CurrentTimeRetrieveResponse> {
    return this._client.get('/api/where/current-time.json', options);
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

      stops?: Array<References.Stop>;

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

      export interface Stop {
        id: string;

        code: string;

        lat: number;

        lon: number;

        name: string;

        direction?: string;

        locationType?: number;

        parent?: string;

        routeIds?: Array<string>;

        staticRouteIds?: Array<string>;

        wheelchairBoarding?: string;
      }
    }
  }
}

export namespace CurrentTime {
  export import CurrentTimeRetrieveResponse = CurrentTimeAPI.CurrentTimeRetrieveResponse;
}
