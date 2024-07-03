// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TripsForLocationAPI from './trips-for-location';
import * as Shared from './shared';

export class TripsForLocation extends APIResource {
  /**
   * Retrieve trips for a given location
   */
  retrieve(
    query: TripsForLocationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TripsForLocationRetrieveResponse> {
    return this._client.get('/api/where/trips-for-location.json', { query, ...options });
  }
}

export interface TripsForLocationRetrieveResponse extends Shared.ResponseWrapper {
  data?: TripsForLocationRetrieveResponse.Data;
}

export namespace TripsForLocationRetrieveResponse {
  export interface Data {
    /**
     * Indicates if the limit of trips has been exceeded
     */
    limitExceeded?: boolean;

    list?: Array<Data.List>;

    /**
     * Indicates if the search location is out of range
     */
    outOfRange?: boolean;

    references?: Shared.References;
  }

  export namespace Data {
    export interface List {
      frequency?: string | null;

      serviceDate?: number;

      situationIds?: Array<string>;

      tripId?: string;
    }
  }
}

export interface TripsForLocationRetrieveParams {
  /**
   * The latitude coordinate of the search center
   */
  lat: number;

  /**
   * Latitude span of the search bounding box
   */
  latSpan: number;

  /**
   * The longitude coordinate of the search center
   */
  lon: number;

  /**
   * Longitude span of the search bounding box
   */
  lonSpan: number;

  /**
   * Whether to include full schedule elements in the tripDetails section. Defaults
   * to false.
   */
  includeSchedule?: boolean;

  /**
   * Whether to include full trip elements in the references section. Defaults to
   * false.
   */
  includeTrip?: boolean;

  /**
   * Specific time for the query. Defaults to the current time.
   */
  time?: number;
}

export namespace TripsForLocation {
  export import TripsForLocationRetrieveResponse = TripsForLocationAPI.TripsForLocationRetrieveResponse;
  export import TripsForLocationRetrieveParams = TripsForLocationAPI.TripsForLocationRetrieveParams;
}
