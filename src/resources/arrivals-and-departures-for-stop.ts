// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ArrivalsAndDeparturesForStopAPI from './arrivals-and-departures-for-stop';
import * as Shared from './shared';

export class ArrivalsAndDeparturesForStop extends APIResource {
  /**
   * arrivals-and-departures-for-stop
   */
  retrieve(
    stopId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArrivalsAndDeparturesForStopRetrieveResponse> {
    return this._client.get(`/api/where/arrivals-and-departures-for-stop/stopID.json`, options);
  }
}

export interface ArrivalsAndDeparturesForStopRetrieveResponse extends Shared.ResponseWrapper {
  data?: ArrivalsAndDeparturesForStopRetrieveResponse.Data;
}

export namespace ArrivalsAndDeparturesForStopRetrieveResponse {
  export interface Data {
    entry?: Data.Entry;
  }

  export namespace Data {
    export interface Entry {
      arrivalsAndDepartures?: Array<Entry.ArrivalsAndDeparture>;

      references?: Entry.References;
    }

    export namespace Entry {
      export interface ArrivalsAndDeparture {
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

        tripStatus?: ArrivalsAndDeparture.TripStatus;

        vehicleId?: string;
      }

      export namespace ArrivalsAndDeparture {
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
}

export namespace ArrivalsAndDeparturesForStop {
  export import ArrivalsAndDeparturesForStopRetrieveResponse = ArrivalsAndDeparturesForStopAPI.ArrivalsAndDeparturesForStopRetrieveResponse;
}
