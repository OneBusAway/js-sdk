// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as AgenciesWithCoverageAPI from './agencies-with-coverage';
import * as Shared from './shared';

export class AgenciesWithCoverage extends APIResource {
  /**
   * Retrieve Agencies with Coverage
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AgenciesWithCoverageListResponse> {
    return this._client.get('/api/where/agencies-with-coverage.json', options);
  }
}

export interface AgenciesWithCoverageListResponse extends Shared.ResponseWrapper {
  data?: AgenciesWithCoverageListResponse.Data;
}

export namespace AgenciesWithCoverageListResponse {
  export interface Data {
    limitExceeded?: boolean;

    list?: Array<Data.List>;

    references?: Data.References;
  }

  export namespace Data {
    export interface List {
      agencyId: string;

      lat: number;

      latSpan: number;

      lon: number;

      lonSpan: number;
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

export namespace AgenciesWithCoverage {
  export import AgenciesWithCoverageListResponse = AgenciesWithCoverageAPI.AgenciesWithCoverageListResponse;
}
