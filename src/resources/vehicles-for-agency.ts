// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class VehiclesForAgency extends APIResource {
  /**
   * Get vehicles for a specific agency
   */
  list(
    agencyId: string,
    query?: VehiclesForAgencyListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VehiclesForAgencyListResponse>;
  list(agencyId: string, options?: Core.RequestOptions): Core.APIPromise<VehiclesForAgencyListResponse>;
  list(
    agencyId: string,
    query: VehiclesForAgencyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VehiclesForAgencyListResponse> {
    if (isRequestOptions(query)) {
      return this.list(agencyId, {}, query);
    }
    return this._client.get(`/api/where/vehicles-for-agency/${agencyId}.json`, { query, ...options });
  }
}

export interface VehiclesForAgencyListResponse extends Shared.ResponseWrapper {
  data: VehiclesForAgencyListResponse.Data;
}

export namespace VehiclesForAgencyListResponse {
  export interface Data {
    limitExceeded: boolean;

    list: Array<Data.List>;

    references: Shared.References;
  }

  export namespace Data {
    export interface List {
      lastLocationUpdateTime: number;

      lastUpdateTime: number;

      location: List.Location;

      tripId: string;

      tripStatus: List.TripStatus;

      vehicleId: string;

      occupancyCapacity?: number;

      occupancyCount?: number;

      occupancyStatus?: string;

      phase?: string;

      status?: string;
    }

    export namespace List {
      export interface Location {
        lat?: number;

        lon?: number;
      }

      export interface TripStatus {
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
        lastKnownLocation?: TripStatus.LastKnownLocation;

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
        position?: TripStatus.Position;

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

      export namespace TripStatus {
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

export interface VehiclesForAgencyListParams {
  /**
   * Specific time for querying the status (timestamp format)
   */
  time?: string;
}

export declare namespace VehiclesForAgency {
  export {
    type VehiclesForAgencyListResponse as VehiclesForAgencyListResponse,
    type VehiclesForAgencyListParams as VehiclesForAgencyListParams,
  };
}
