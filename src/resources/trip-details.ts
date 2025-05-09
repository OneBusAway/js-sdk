// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class TripDetails extends APIResource {
  /**
   * Retrieve Trip Details
   */
  retrieve(
    tripId: string,
    query?: TripDetailRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TripDetailRetrieveResponse>;
  retrieve(tripId: string, options?: Core.RequestOptions): Core.APIPromise<TripDetailRetrieveResponse>;
  retrieve(
    tripId: string,
    query: TripDetailRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TripDetailRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(tripId, {}, query);
    }
    return this._client.get(`/api/where/trip-details/${tripId}.json`, { query, ...options });
  }
}

export interface TripDetailRetrieveResponse extends Shared.ResponseWrapper {
  data: TripDetailRetrieveResponse.Data;
}

export namespace TripDetailRetrieveResponse {
  export interface Data {
    entry: Data.Entry;

    references: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      tripId: string;

      frequency?: string | null;

      schedule?: Entry.Schedule;

      serviceDate?: number;

      situationIds?: Array<string>;

      status?: Entry.Status;
    }

    export namespace Entry {
      export interface Schedule {
        nextTripId: string;

        previousTripId: string;

        stopTimes: Array<Schedule.StopTime>;

        timeZone: string;

        frequency?: string | null;
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

export interface TripDetailRetrieveParams {
  /**
   * Whether to include the full schedule element in the tripDetails section
   * (defaults to true).
   */
  includeSchedule?: boolean;

  /**
   * Whether to include the full status element in the tripDetails section (defaults
   * to true).
   */
  includeStatus?: boolean;

  /**
   * Whether to include the full trip element in the references section (defaults to
   * true).
   */
  includeTrip?: boolean;

  /**
   * Service date for the trip as Unix time in milliseconds (optional).
   */
  serviceDate?: number;

  /**
   * Time parameter to query the system at a specific time (optional).
   */
  time?: number;
}

export declare namespace TripDetails {
  export {
    type TripDetailRetrieveResponse as TripDetailRetrieveResponse,
    type TripDetailRetrieveParams as TripDetailRetrieveParams,
  };
}
