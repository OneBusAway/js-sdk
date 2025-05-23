// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Trip extends APIResource {
  /**
   * Get details of a specific trip
   */
  retrieve(tripId: string, options?: Core.RequestOptions): Core.APIPromise<TripRetrieveResponse> {
    return this._client.get(`/api/where/trip/${tripId}.json`, options);
  }
}

export interface TripRetrieveResponse extends Shared.ResponseWrapper {
  data: TripRetrieveResponse.Data;
}

export namespace TripRetrieveResponse {
  export interface Data {
    entry: Data.Entry;

    references: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      id: string;

      routeId: string;

      serviceId: string;

      blockId?: string;

      directionId?: string;

      peakOffpeak?: number;

      routeShortName?: string;

      shapeId?: string;

      timeZone?: string;

      tripHeadsign?: string;

      tripShortName?: string;
    }
  }
}

export declare namespace Trip {
  export { type TripRetrieveResponse as TripRetrieveResponse };
}
