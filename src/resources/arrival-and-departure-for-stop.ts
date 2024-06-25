// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ArrivalAndDepartureForStopAPI from './arrival-and-departure-for-stop';
import * as Shared from './shared';

export class ArrivalAndDepartureForStop extends APIResource {
  /**
   * arrival-and-departure-for-stop
   */
  retrieve(
    stopId: string,
    query: ArrivalAndDepartureForStopRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArrivalAndDepartureForStopRetrieveResponse> {
    return this._client.get(`/api/where/arrival-and-departure-for-stop/${stopId}`, { query, ...options });
  }
}

export interface ArrivalAndDepartureForStopRetrieveResponse extends Shared.ResponseWrapper {
  data?: ArrivalAndDepartureForStopRetrieveResponse.Data;
}

export namespace ArrivalAndDepartureForStopRetrieveResponse {
  export interface Data {
    entry?: Data.Entry;

    references?: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      actualTrack?: string;

      arrivalEnabled?: boolean;

      blockTripSequence?: number;

      departureEnabled?: boolean;

      distanceFromStop?: number;

      frequency?: string;

      historicalOccupancy?: string;

      lastUpdateTime?: number;

      numberOfStopsAway?: number;

      occupancyStatus?: string;

      predicted?: boolean;

      predictedArrivalInterval?: string;

      predictedArrivalTime?: number;

      predictedDepartureInterval?: string;

      predictedDepartureTime?: number;

      predictedOccupancy?: string;

      routeId?: string;

      routeLongName?: string;

      routeShortName?: string;

      scheduledArrivalInterval?: string;

      scheduledArrivalTime?: number;

      scheduledDepartureInterval?: string;

      scheduledDepartureTime?: number;

      scheduledTrack?: string;

      serviceDate?: number;

      situationIds?: Array<string>;

      status?: string;

      stopId?: string;

      stopSequence?: number;

      totalStopsInTrip?: number;

      tripHeadsign?: string;

      tripId?: string;

      tripStatus?: Entry.TripStatus;

      vehicleId?: string;
    }

    export namespace Entry {
      export interface TripStatus {
        activeTripId?: string;

        blockTripSequence?: number;

        closestStop?: string;

        closestStopTimeOffset?: number;

        distanceAlongTrip?: number;

        frequency?: string;

        lastKnownDistanceAlongTrip?: number;

        lastKnownLocation?: TripStatus.LastKnownLocation;

        lastKnownOrientation?: number;

        lastLocationUpdateTime?: number;

        lastUpdateTime?: number;

        nextStop?: string;

        nextStopTimeOffset?: number;

        occupancyCapacity?: number;

        occupancyCount?: number;

        occupancyStatus?: string;

        orientation?: number;

        phase?: string;

        position?: TripStatus.Position;

        predicted?: boolean;

        scheduledDistanceAlongTrip?: number;

        scheduleDeviation?: number;

        serviceDate?: number;

        situationIds?: Array<string>;

        status?: string;

        totalDistanceAlongTrip?: number;

        vehicleId?: string;
      }

      export namespace TripStatus {
        export interface LastKnownLocation {
          lat?: number;

          lon?: number;
        }

        export interface Position {
          lat?: number;

          lon?: number;
        }
      }
    }
  }
}

export interface ArrivalAndDepartureForStopRetrieveParams {
  serviceDate: number;

  tripId: string;

  stopSequence?: number;

  time?: number;

  vehicleId?: string;
}

export namespace ArrivalAndDepartureForStop {
  export import ArrivalAndDepartureForStopRetrieveResponse = ArrivalAndDepartureForStopAPI.ArrivalAndDepartureForStopRetrieveResponse;
  export import ArrivalAndDepartureForStopRetrieveParams = ArrivalAndDepartureForStopAPI.ArrivalAndDepartureForStopRetrieveParams;
}
