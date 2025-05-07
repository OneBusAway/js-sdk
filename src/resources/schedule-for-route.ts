// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class ScheduleForRoute extends APIResource {
  /**
   * Retrieve the full schedule for a route on a particular day
   *
   * @example
   * ```ts
   * const scheduleForRoute =
   *   await client.scheduleForRoute.retrieve('1_100223');
   * ```
   */
  retrieve(
    routeId: string,
    query?: ScheduleForRouteRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleForRouteRetrieveResponse>;
  retrieve(routeId: string, options?: Core.RequestOptions): Core.APIPromise<ScheduleForRouteRetrieveResponse>;
  retrieve(
    routeId: string,
    query: ScheduleForRouteRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleForRouteRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(routeId, {}, query);
    }
    return this._client.get(`/api/where/schedule-for-route/${routeId}.json`, { query, ...options });
  }
}

export interface ScheduleForRouteRetrieveResponse extends Shared.ResponseWrapper {
  data: ScheduleForRouteRetrieveResponse.Data;
}

export namespace ScheduleForRouteRetrieveResponse {
  export interface Data {
    entry: Data.Entry;
  }

  export namespace Data {
    export interface Entry {
      routeId: string;

      scheduleDate: number;

      serviceIds: Array<string>;

      stops: Array<Entry.Stop>;

      stopTripGroupings: Array<Entry.StopTripGrouping>;

      trips: Array<Entry.Trip>;
    }

    export namespace Entry {
      export interface Stop {
        id: string;

        lat: number;

        lon: number;

        name: string;

        parent: string;

        routeIds: Array<string>;

        staticRouteIds: Array<string>;

        code?: string;

        direction?: string;

        locationType?: number;

        wheelchairBoarding?: string;
      }

      export interface StopTripGrouping {
        directionId: string;

        stopIds: Array<string>;

        tripHeadsigns: Array<string>;

        tripIds: Array<string>;

        tripsWithStopTimes?: Array<StopTripGrouping.TripsWithStopTime>;
      }

      export namespace StopTripGrouping {
        export interface TripsWithStopTime {
          stopTimes: Array<TripsWithStopTime.StopTime>;

          tripId: string;
        }

        export namespace TripsWithStopTime {
          export interface StopTime {
            arrivalEnabled: boolean;

            arrivalTime: number;

            departureEnabled: boolean;

            departureTime: number;

            stopId: string;

            tripId: string;

            serviceId?: string;

            stopHeadsign?: string;
          }
        }
      }

      export interface Trip {
        id: string;

        routeId: string;

        serviceId: string;

        blockId?: string;

        directionId?: string;

        peakOffpeak?: number;

        routeShortName?: string;

        shapeId?: string;

        timeZone?: string;

        tripHeadsign?: string;

        tripShortName?: string;
      }
    }
  }
}

export interface ScheduleForRouteRetrieveParams {
  /**
   * The date for which you want to request a schedule in the format YYYY-MM-DD
   * (optional, defaults to current date)
   */
  date?: string;
}

export declare namespace ScheduleForRoute {
  export {
    type ScheduleForRouteRetrieveResponse as ScheduleForRouteRetrieveResponse,
    type ScheduleForRouteRetrieveParams as ScheduleForRouteRetrieveParams,
  };
}
