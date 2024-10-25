// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ScheduleForStopAPI from './schedule-for-stop';
import * as Shared from './shared';

export class ScheduleForStop extends APIResource {
  /**
   * Get schedule for a specific stop
   */
  retrieve(
    stopId: string,
    query?: ScheduleForStopRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleForStopRetrieveResponse>;
  retrieve(stopId: string, options?: Core.RequestOptions): Core.APIPromise<ScheduleForStopRetrieveResponse>;
  retrieve(
    stopId: string,
    query: ScheduleForStopRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleForStopRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(stopId, {}, query);
    }
    return this._client.get(`/api/where/schedule-for-stop/${stopId}.json`, { query, ...options });
  }
}

export interface ScheduleForStopRetrieveResponse extends Shared.ResponseWrapper {
  data: ScheduleForStopRetrieveResponse.Data;
}

export namespace ScheduleForStopRetrieveResponse {
  export interface Data {
    entry: Data.Entry;

    references: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      date: number;

      stopId: string;

      stopRouteSchedules: Array<Entry.StopRouteSchedule>;
    }

    export namespace Entry {
      export interface StopRouteSchedule {
        routeId: string;

        stopRouteDirectionSchedules: Array<StopRouteSchedule.StopRouteDirectionSchedule>;
      }

      export namespace StopRouteSchedule {
        export interface StopRouteDirectionSchedule {
          scheduleStopTimes: Array<StopRouteDirectionSchedule.ScheduleStopTime>;

          tripHeadsign: string;

          scheduleFrequencies?: Array<StopRouteDirectionSchedule.ScheduleFrequency>;
        }

        export namespace StopRouteDirectionSchedule {
          export interface ScheduleStopTime {
            arrivalEnabled: boolean;

            arrivalTime: number;

            departureEnabled: boolean;

            departureTime: number;

            serviceId: string;

            tripId: string;

            stopHeadsign?: string;
          }

          export interface ScheduleFrequency {
            endTime: number;

            headway: number;

            serviceDate: number;

            serviceId: string;

            startTime: number;

            tripId: string;
          }
        }
      }
    }
  }
}

export interface ScheduleForStopRetrieveParams {
  /**
   * The date for which you want to request a schedule in the format YYYY-MM-DD
   * (optional, defaults to the current date)
   */
  date?: string;
}

export namespace ScheduleForStop {
  export type ScheduleForStopRetrieveResponse = ScheduleForStopAPI.ScheduleForStopRetrieveResponse;
  export type ScheduleForStopRetrieveParams = ScheduleForStopAPI.ScheduleForStopRetrieveParams;
}
