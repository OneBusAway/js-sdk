// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class ArrivalsAndDeparturesForLocation extends APIResource {
  /**
   * Returns real-time arrival and departure data for stops within a bounding box or
   * radius centered on a specific location.
   */
  list(
    query: ArrivalsAndDeparturesForLocationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArrivalsAndDeparturesForLocationListResponse> {
    return this._client.get('/api/where/arrivals-and-departures-for-location.json', { query, ...options });
  }
}

export interface ArrivalsAndDeparturesForLocationListResponse extends Shared.ResponseWrapper {
  data: ArrivalsAndDeparturesForLocationListResponse.Data;
}

export namespace ArrivalsAndDeparturesForLocationListResponse {
  export interface Data {
    entry: Data.Entry;

    references: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      arrivalsAndDepartures: Array<Entry.ArrivalsAndDeparture>;

      limitExceeded: boolean;

      nearbyStopIds: Array<Entry.NearbyStopID>;

      stopIds: Array<string>;

      situationIds?: Array<string>;
    }

    export namespace Entry {
      export interface ArrivalsAndDeparture {
        /**
         * Indicates if riders can arrive on this transit vehicle.
         */
        arrivalEnabled: boolean;

        /**
         * Index of this arrival’s trip into the sequence of trips for the active block.
         */
        blockTripSequence: number;

        /**
         * Indicates if riders can depart from this transit vehicle.
         */
        departureEnabled: boolean;

        /**
         * Number of stops between the arriving transit vehicle and the current stop
         * (excluding the current stop).
         */
        numberOfStopsAway: number;

        /**
         * Predicted arrival time, in milliseconds since Unix epoch (zero if no real-time
         * available).
         */
        predictedArrivalTime: number;

        /**
         * Predicted departure time, in milliseconds since Unix epoch (zero if no real-time
         * available).
         */
        predictedDepartureTime: number;

        /**
         * The ID of the route for the arriving vehicle.
         */
        routeId: string;

        /**
         * Scheduled arrival time, in milliseconds since Unix epoch.
         */
        scheduledArrivalTime: number;

        /**
         * Scheduled departure time, in milliseconds since Unix epoch.
         */
        scheduledDepartureTime: number;

        /**
         * Time, in milliseconds since the Unix epoch, of midnight for the start of the
         * service date for the trip.
         */
        serviceDate: number;

        /**
         * The ID of the stop the vehicle is arriving at.
         */
        stopId: string;

        /**
         * Index of the stop into the sequence of stops that make up the trip for this
         * arrival.
         */
        stopSequence: number;

        /**
         * Total number of stops visited on the trip for this arrival.
         */
        totalStopsInTrip: number;

        /**
         * Optional trip headsign that potentially overrides the trip headsign in the
         * referenced trip element.
         */
        tripHeadsign: string;

        /**
         * The ID of the trip for the arriving vehicle.
         */
        tripId: string;

        /**
         * ID of the transit vehicle serving this trip.
         */
        vehicleId: string;

        /**
         * The actual track information of the arriving transit vehicle.
         */
        actualTrack?: string;

        /**
         * Distance of the arriving transit vehicle from the stop, in meters.
         */
        distanceFromStop?: number;

        /**
         * Information about frequency-based scheduling, if applicable to the trip.
         */
        frequency?: string;

        /**
         * Historical occupancy information of the transit vehicle.
         */
        historicalOccupancy?: string;

        /**
         * Timestamp of the last update time for this arrival.
         */
        lastUpdateTime?: number;

        /**
         * Current occupancy status of the transit vehicle.
         */
        occupancyStatus?: string;

        /**
         * Indicates if real-time arrival info is available for this trip.
         */
        predicted?: boolean;

        /**
         * Interval for predicted arrival time, if available.
         */
        predictedArrivalInterval?: string;

        /**
         * Interval for predicted departure time, if available.
         */
        predictedDepartureInterval?: string;

        /**
         * Predicted occupancy status of the transit vehicle.
         */
        predictedOccupancy?: string;

        /**
         * Optional route long name that potentially overrides the route long name in the
         * referenced route element.
         */
        routeLongName?: string;

        /**
         * Optional route short name that potentially overrides the route short name in the
         * referenced route element.
         */
        routeShortName?: string;

        /**
         * Interval for scheduled arrival time.
         */
        scheduledArrivalInterval?: string;

        /**
         * Interval for scheduled departure time.
         */
        scheduledDepartureInterval?: string;

        /**
         * Scheduled track information of the arriving transit vehicle.
         */
        scheduledTrack?: string;

        /**
         * References to situation elements (if any) applicable to this arrival.
         */
        situationIds?: Array<string>;

        /**
         * Current status of the arrival.
         */
        status?: string;

        /**
         * Trip-specific status for the arriving transit vehicle.
         */
        tripStatus?: ArrivalsAndDeparture.TripStatus;
      }

      export namespace ArrivalsAndDeparture {
        /**
         * Trip-specific status for the arriving transit vehicle.
         */
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
           * Last known location of the transit vehicle (optional).
           */
          lastKnownLocation?: TripStatus.LastKnownLocation | null;

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
           * Last known location of the transit vehicle (optional).
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

      export interface NearbyStopID {
        distanceFromQuery?: number;

        stopId?: string;
      }
    }
  }
}

export interface ArrivalsAndDeparturesForLocationListParams {
  /**
   * The latitude coordinate of the search center.
   */
  lat: number;

  /**
   * The longitude coordinate of the search center.
   */
  lon: number;

  /**
   * If true, returns a 404 Not Found error instead of an empty result.
   */
  emptyReturnsNotFound?: boolean;

  /**
   * Sets the latitude limits of the search bounding box.
   */
  latSpan?: number;

  /**
   * Sets the longitude limits of the search bounding box.
   */
  lonSpan?: number;

  /**
   * The max size of the list of nearby stops and arrivals to return. Defaults to
   * 250, max 1000.
   */
  maxCount?: number;

  /**
   * Include arrivals and departures this many minutes after the query time.
   */
  minutesAfter?: number;

  /**
   * Include arrivals and departures this many minutes before the query time.
   */
  minutesBefore?: number;

  /**
   * The search radius in meters.
   */
  radius?: number;

  /**
   * Optional list of GTFS routeTypes to filter by (comma delimited) e.g. "1,2,3".
   */
  routeType?: string;

  /**
   * By default, returns the status right now. Can be queried at a specific time
   * (milliseconds since epoch) for testing.
   */
  time?: number;
}

export declare namespace ArrivalsAndDeparturesForLocation {
  export {
    type ArrivalsAndDeparturesForLocationListResponse as ArrivalsAndDeparturesForLocationListResponse,
    type ArrivalsAndDeparturesForLocationListParams as ArrivalsAndDeparturesForLocationListParams,
  };
}
