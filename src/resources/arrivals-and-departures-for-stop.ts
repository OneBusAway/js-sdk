// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as ArrivalsAndDeparturesForStopAPI from './arrivals-and-departures-for-stop';

export class ArrivalsAndDeparturesForStop extends APIResource {
  /**
   * arrivals-and-departures-for-stop
   */
  retrieve(
    stopIdJson: string,
    query?: ArrivalsAndDeparturesForStopRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  retrieve(stopIdJson: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  retrieve(
    stopIdJson: string,
    query: ArrivalsAndDeparturesForStopRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.retrieve(stopIdJson, {}, query);
    }
    return this._client.get(`/api/where/arrivals-and-departures-for-stop/${stopIdJson}`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ArrivalsAndDeparturesForStopRetrieveParams {
  key?: string;
}

export namespace ArrivalsAndDeparturesForStop {
  export import ArrivalsAndDeparturesForStopRetrieveParams = ArrivalsAndDeparturesForStopAPI.ArrivalsAndDeparturesForStopRetrieveParams;
}
