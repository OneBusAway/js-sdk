// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ArrivalsAndDeparturesForStopAPI from './arrivals-and-departures-for-stop';
import * as Shared from './shared';

export class ArrivalsAndDeparturesForStop extends APIResource {
  /**
   * arrivals-and-departures-for-stop
   */
  retrieve(
    stopId: string,
    query?: ArrivalsAndDeparturesForStopRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArrivalsAndDeparturesForStopRetrieveResponse>;
  retrieve(
    stopId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArrivalsAndDeparturesForStopRetrieveResponse>;
  retrieve(
    stopId: string,
    query: ArrivalsAndDeparturesForStopRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArrivalsAndDeparturesForStopRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(stopId, {}, query);
    }
    return this._client.get(`/api/where/arrivals-and-departures-for-stop/stopID.json`, { query, ...options });
  }
}

export interface ArrivalsAndDeparturesForStopRetrieveResponse extends Shared.ResponseWrapper {
  data?: ArrivalsAndDeparturesForStopRetrieveResponse.Data;
}

export namespace ArrivalsAndDeparturesForStopRetrieveResponse {
  export interface Data {
    entry?: Data.Entry;

    references?: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      arrivalsAndDepartures?: Array<Entry.ArrivalsAndDeparture>;
    }

    export namespace Entry {
      export interface ArrivalsAndDeparture {
        /**
         * The actual track information of the arriving transit vehicle.
         */
        actualTrack?: string;

        /**
         * Indicates if riders can arrive on this transit vehicle.
         */
        arrivalEnabled?: boolean;

        /**
         * Index of this arrival’s trip into the sequence of trips for the active block.
         */
        blockTripSequence?: number;

        /**
         * Indicates if riders can depart from this transit vehicle.
         */
        departureEnabled?: boolean;

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
         * Number of stops between the arriving transit vehicle and the current stop
         * (excluding the current stop).
         */
        numberOfStopsAway?: number;

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
         * Predicted arrival time, in milliseconds since Unix epoch (zero if no real-time
         * available).
         */
        predictedArrivalTime?: number;

        /**
         * Interval for predicted departure time, if available.
         */
        predictedDepartureInterval?: string;

        /**
         * Predicted departure time, in milliseconds since Unix epoch (zero if no real-time
         * available).
         */
        predictedDepartureTime?: number;

        /**
         * Predicted occupancy status of the transit vehicle.
         */
        predictedOccupancy?: string;

        /**
         * The ID of the route for the arriving vehicle.
         */
        routeId?: string;

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
         * Scheduled arrival time, in milliseconds since Unix epoch.
         */
        scheduledArrivalTime?: number;

        /**
         * Interval for scheduled departure time.
         */
        scheduledDepartureInterval?: string;

        /**
         * Scheduled departure time, in milliseconds since Unix epoch.
         */
        scheduledDepartureTime?: number;

        /**
         * Scheduled track information of the arriving transit vehicle.
         */
        scheduledTrack?: string;

        /**
         * Time, in milliseconds since the Unix epoch, of midnight for the start of the
         * service date for the trip.
         */
        serviceDate?: number;

        /**
         * References to situation elements (if any) applicable to this arrival.
         */
        situationIds?: Array<string>;

        /**
         * Current status of the arrival.
         */
        status?: string;

        /**
         * The ID of the stop the vehicle is arriving at.
         */
        stopId?: string;

        /**
         * Index of the stop into the sequence of stops that make up the trip for this
         * arrival.
         */
        stopSequence?: number;

        /**
         * Total number of stops visited on the trip for this arrival.
         */
        totalStopsInTrip?: number;

        /**
         * Optional trip headsign that potentially overrides the trip headsign in the
         * referenced trip element.
         */
        tripHeadsign?: string;

        /**
         * The ID of the trip for the arriving vehicle.
         */
        tripId?: string;

        /**
         * Trip-specific status for the arriving transit vehicle.
         */
        tripStatus?: ArrivalsAndDeparture.TripStatus;

        /**
         * ID of the transit vehicle serving this trip.
         */
        vehicleId?: string;
      }

      export namespace ArrivalsAndDeparture {
        /**
         * Trip-specific status for the arriving transit vehicle.
         */
        export interface TripStatus {
          /**
           * Trip ID of the trip the vehicle is actively serving.
           */
          activeTripId?: string;

          /**
           * Index of the active trip into the sequence of trips for the active block.
           */
          blockTripSequence?: number;

          /**
           * ID of the closest stop to the current location of the transit vehicle.
           */
          closestStop?: string;

          /**
           * Time offset from the closest stop to the current position of the transit vehicle
           * (in seconds).
           */
          closestStopTimeOffset?: number;

          /**
           * Distance, in meters, the transit vehicle has progressed along the active trip.
           */
          distanceAlongTrip?: number;

          /**
           * Information about frequency-based scheduling, if applicable to the trip.
           */
          frequency?: string;

          /**
           * Last known distance along the trip received in real-time from the transit
           * vehicle.
           */
          lastKnownDistanceAlongTrip?: number;

          /**
           * Last known location of the transit vehicle.
           */
          lastKnownLocation?: TripStatus.LastKnownLocation;

          /**
           * Last known orientation value received in real-time from the transit vehicle.
           */
          lastKnownOrientation?: number;

          /**
           * Timestamp of the last known real-time location update from the transit vehicle.
           */
          lastLocationUpdateTime?: number;

          /**
           * Timestamp of the last known real-time update from the transit vehicle.
           */
          lastUpdateTime?: number;

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
           * Capacity of the transit vehicle in terms of occupancy.
           */
          occupancyCapacity?: number;

          /**
           * Current count of occupants in the transit vehicle.
           */
          occupancyCount?: number;

          /**
           * Current occupancy status of the transit vehicle.
           */
          occupancyStatus?: string;

          /**
           * Orientation of the transit vehicle, represented as an angle in degrees.
           */
          orientation?: number;

          /**
           * Current journey phase of the trip.
           */
          phase?: string;

          /**
           * Current position of the transit vehicle.
           */
          position?: TripStatus.Position;

          /**
           * Indicates if real-time arrival info is available for this trip.
           */
          predicted?: boolean;

          /**
           * Distance, in meters, the transit vehicle is scheduled to have progressed along
           * the active trip.
           */
          scheduledDistanceAlongTrip?: number;

          /**
           * Deviation from the schedule in seconds (positive for late, negative for early).
           */
          scheduleDeviation?: number;

          /**
           * Time, in milliseconds since the Unix epoch, of midnight for the start of the
           * service date for the trip.
           */
          serviceDate?: number;

          /**
           * References to situation elements (if any) applicable to this trip.
           */
          situationIds?: Array<string>;

          /**
           * Current status modifiers for the trip.
           */
          status?: string;

          /**
           * Total length of the trip, in meters.
           */
          totalDistanceAlongTrip?: number;

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
}

export interface ArrivalsAndDeparturesForStopRetrieveParams {
  /**
   * Include vehicles arriving or departing in the next n minutes.
   */
  minutesAfter?: number;

  /**
   * Include vehicles having arrived or departed in the previous n minutes.
   */
  minutesBefore?: number;

  /**
   * The specific time for querying the system status.
   */
  time?: string;
}

export namespace ArrivalsAndDeparturesForStop {
  export import ArrivalsAndDeparturesForStopRetrieveResponse = ArrivalsAndDeparturesForStopAPI.ArrivalsAndDeparturesForStopRetrieveResponse;
  export import ArrivalsAndDeparturesForStopRetrieveParams = ArrivalsAndDeparturesForStopAPI.ArrivalsAndDeparturesForStopRetrieveParams;
}
