// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ReportProblemWithStopAPI from './report-problem-with-stop';
import * as Shared from './shared';

export class ReportProblemWithStop extends APIResource {
  /**
   * Submit a user-generated problem report for a stop
   */
  retrieve(
    stopId: string,
    query?: ReportProblemWithStopRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResponseWrapper>;
  retrieve(stopId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ResponseWrapper>;
  retrieve(
    stopId: string,
    query: ReportProblemWithStopRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResponseWrapper> {
    if (isRequestOptions(query)) {
      return this.retrieve(stopId, {}, query);
    }
    return this._client.get(`/api/where/report-problem-with-stop/${stopId}.json`, { query, ...options });
  }
}

export interface ReportProblemWithStopRetrieveParams {
  /**
   * A string code identifying the nature of the problem
   */
  code?: 'stop_name_wrong' | 'stop_number_wrong' | 'stop_location_wrong' | 'route_or_trip_missing' | 'other';

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
}

export namespace ReportProblemWithStop {
  export type ReportProblemWithStopRetrieveParams =
    ReportProblemWithStopAPI.ReportProblemWithStopRetrieveParams;
}
