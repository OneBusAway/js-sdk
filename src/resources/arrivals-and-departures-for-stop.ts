// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ArrivalsAndDeparturesForStopAPI from './arrivals-and-departures-for-stop';

export class ArrivalsAndDeparturesForStop extends APIResource {
  /**
   * arrivals-and-departures-for-stop
   */
  retrieve(
    stopId: string,
    query: ArrivalsAndDeparturesForStopRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get(`/api/where/arrivals-and-departures-for-stop/stopID.json`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ArrivalsAndDeparturesForStopRetrieveParams {
  key: string;
}

export namespace ArrivalsAndDeparturesForStop {
  export import ArrivalsAndDeparturesForStopRetrieveParams = ArrivalsAndDeparturesForStopAPI.ArrivalsAndDeparturesForStopRetrieveParams;
}
