// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as StopsForLocationAPI from './stops-for-location';
import * as Shared from './shared';

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

export interface StopsForLocationRetrieveResponse extends Shared.ResponseWrapper {
  data?: StopsForLocationRetrieveResponse.Data;
}

export namespace StopsForLocationRetrieveResponse {
  export interface Data {
    limitExceeded?: boolean;

    list?: Array<Data.List>;

    references?: Data.References;
  }

  export namespace Data {
    export interface List {
      id?: string;

      code?: string;

      direction?: string;

      lat?: number;

      locationType?: number;

      lon?: number;

      name?: string;

      parent?: string;

      routeIds?: Array<string>;

      staticRouteIds?: Array<string>;

      wheelchairBoarding?: string;
    }

    export interface References {
      agencies?: Array<References.Agency>;

      routes?: Array<References.Route>;

      situations?: Array<unknown>;

      stops?: Array<References.Stop>;

      stopTimes?: Array<unknown>;

      trips?: Array<References.Trip>;
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

      export interface Trip {
        id: string;

        routeId: string;

        blockId?: string;

        directionId?: string;

        peakOffpeak?: number;

        routeShortName?: string;

        serviceId?: string;

        shapeId?: string;

        timeZone?: string;

        tripHeadsign?: string;

        tripShortName?: string;
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
