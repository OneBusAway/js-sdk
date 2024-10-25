// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ReportProblemWithTripAPI from './report-problem-with-trip';
import * as Shared from './shared';

export class ReportProblemWithTrip extends APIResource {
  /**
   * Submit a user-generated problem report for a particular trip.
   */
  retrieve(
    tripId: string,
    query?: ReportProblemWithTripRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResponseWrapper>;
  retrieve(tripId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ResponseWrapper>;
  retrieve(
    tripId: string,
    query: ReportProblemWithTripRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResponseWrapper> {
    if (isRequestOptions(query)) {
      return this.retrieve(tripId, {}, query);
    }
    return this._client.get(`/api/where/report-problem-with-trip/${tripId}.json`, { query, ...options });
  }
}

export interface ReportProblemWithTripRetrieveParams {
  /**
   * A string code identifying the nature of the problem
   */
  code?:
    | 'vehicle_never_came'
    | 'vehicle_came_early'
    | 'vehicle_came_late'
    | 'wrong_headsign'
    | 'vehicle_does_not_stop_here'
    | 'other';

  /**
   * The service date of the trip
   */
  serviceDate?: number;

  /**
   * A stop ID indicating where the user is experiencing the problem
   */
  stopID?: string;

  /**
   * Additional comment text supplied by the user describing the problem
   */
  userComment?: string;

  /**
   * The reporting user’s current latitude
   */
  userLat?: number;

  /**
   * The reporting user’s location accuracy, in meters
   */
  userLocationAccuracy?: number;

  /**
   * The reporting user’s current longitude
   */
  userLon?: number;

  /**
   * Indicator if the user is on the transit vehicle experiencing the problem
   */
  userOnVehicle?: boolean;

  /**
   * The vehicle number, as reported by the user
   */
  userVehicleNumber?: string;

  /**
   * The vehicle actively serving the trip
   */
  vehicleID?: string;
}

export namespace ReportProblemWithTrip {
  export type ReportProblemWithTripRetrieveParams =
    ReportProblemWithTripAPI.ReportProblemWithTripRetrieveParams;
}
