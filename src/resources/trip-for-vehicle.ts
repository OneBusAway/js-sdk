// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as TripForVehicleAPI from './trip-for-vehicle';
import * as Shared from './shared';

export class TripForVehicle extends APIResource {
  /**
   * Retrieve trip for a specific vehicle
   */
  retrieve(
    vehicleId: string,
    query?: TripForVehicleRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TripForVehicleRetrieveResponse>;
  retrieve(vehicleId: string, options?: Core.RequestOptions): Core.APIPromise<TripForVehicleRetrieveResponse>;
  retrieve(
    vehicleId: string,
    query: TripForVehicleRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TripForVehicleRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(vehicleId, {}, query);
    }
    return this._client.get(`/api/where/trip-for-vehicle/${vehicleId}.json`, { query, ...options });
  }
}

export interface TripForVehicleRetrieveResponse extends Shared.ResponseWrapper {
  data: TripForVehicleRetrieveResponse.Data;
}

export namespace TripForVehicleRetrieveResponse {
  export interface Data {
    entry: Data.Entry;

    references: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      frequency?: string | null;

      schedule?: Entry.Schedule;

      serviceDate?: number;

      situationIds?: Array<string>;

      status?: Entry.Status;

      tripId?: string;
    }

    export namespace Entry {
      export interface Schedule {
        frequency?: string | null;

        nextTripId?: string;

        previousTripId?: string;

        stopTimes?: Array<Schedule.StopTime>;

        timeZone?: string;
      }

      export namespace Schedule {
        export interface StopTime {
          arrivalTime?: number;

          departureTime?: number;

          distanceAlongTrip?: number;

          historicalOccupancy?: string;

          stopHeadsign?: string;

          stopId?: string;
        }
      }

      export interface Status {
        /**
         * Trip ID of the trip the vehicle is actively serving.
         */
        activeTripId: string;

        /**
         * Index of the active trip into the sequence of trips for the active block.
         */
        blockTripSequence: number;

        /**
         * ID of the closest stop to the current location of the transit vehicle.
         */
        closestStop: string;

        /**
         * Distance, in meters, the transit vehicle has progressed along the active trip.
         */
        distanceAlongTrip: number;

        /**
         * Last known distance along the trip received in real-time from the transit
         * vehicle.
         */
        lastKnownDistanceAlongTrip: number;

        /**
         * Timestamp of the last known real-time location update from the transit vehicle.
         */
        lastLocationUpdateTime: number;

        /**
         * Timestamp of the last known real-time update from the transit vehicle.
         */
        lastUpdateTime: number;

        /**
         * Capacity of the transit vehicle in terms of occupancy.
         */
        occupancyCapacity: number;

        /**
         * Current count of occupants in the transit vehicle.
         */
        occupancyCount: number;

        /**
         * Current occupancy status of the transit vehicle.
         */
        occupancyStatus: string;

        /**
         * Current journey phase of the trip.
         */
        phase: string;

        /**
         * Indicates if real-time arrival info is available for this trip.
         */
        predicted: boolean;

        /**
         * Deviation from the schedule in seconds (positive for late, negative for early).
         */
        scheduleDeviation: number;

        /**
         * Time, in milliseconds since the Unix epoch, of midnight for the start of the
         * service date for the trip.
         */
        serviceDate: number;

        /**
         * Current status modifiers for the trip.
         */
        status: string;

        /**
         * Total length of the trip, in meters.
         */
        totalDistanceAlongTrip: number;

        /**
         * Time offset from the closest stop to the current position of the transit vehicle
         * (in seconds).
         */
        closestStopTimeOffset?: number;

        /**
         * Information about frequency-based scheduling, if applicable to the trip.
         */
        frequency?: string;

        /**
         * Last known location of the transit vehicle.
         */
        lastKnownLocation?: Status.LastKnownLocation;

        /**
         * Last known orientation value received in real-time from the transit vehicle.
         */
        lastKnownOrientation?: number;

        /**
         * ID of the next stop the transit vehicle is scheduled to arrive at.
         */
        nextStop?: string;

        /**
         * Time offset from the next stop to the current position of the transit vehicle
         * (in seconds).
         */
        nextStopTimeOffset?: number;

        /**
         * Orientation of the transit vehicle, represented as an angle in degrees.
         */
        orientation?: number;

        /**
         * Current position of the transit vehicle.
         */
        position?: Status.Position;

        /**
         * Distance, in meters, the transit vehicle is scheduled to have progressed along
         * the active trip.
         */
        scheduledDistanceAlongTrip?: number;

        /**
         * References to situation elements (if any) applicable to this trip.
         */
        situationIds?: Array<string>;

        /**
         * ID of the transit vehicle currently serving the trip.
         */
        vehicleId?: string;
      }

      export namespace Status {
        /**
         * Last known location of the transit vehicle.
         */
        export interface LastKnownLocation {
          /**
           * Latitude of the last known location of the transit vehicle.
           */
          lat?: number;

          /**
           * Longitude of the last known location of the transit vehicle.
           */
          lon?: number;
        }

        /**
         * Current position of the transit vehicle.
         */
        export interface Position {
          /**
           * Latitude of the current position of the transit vehicle.
           */
          lat?: number;

          /**
           * Longitude of the current position of the transit vehicle.
           */
          lon?: number;
        }
      }
    }
  }
}

export interface TripForVehicleRetrieveParams {
  /**
   * Determines whether full <schedule/> element is included in the <tripDetails/>
   * section. Defaults to false.
   */
  includeSchedule?: boolean;

  /**
   * Determines whether the full <status/> element is included in the <tripDetails/>
   * section. Defaults to true.
   */
  includeStatus?: boolean;

  /**
   * Determines whether full <trip/> element is included in the <references/>
   * section. Defaults to false.
   */
  includeTrip?: boolean;

  /**
   * Time parameter to query the system at a specific time (optional).
   */
  time?: number;
}

export namespace TripForVehicle {
  export import TripForVehicleRetrieveResponse = TripForVehicleAPI.TripForVehicleRetrieveResponse;
  export import TripForVehicleRetrieveParams = TripForVehicleAPI.TripForVehicleRetrieveParams;
}
