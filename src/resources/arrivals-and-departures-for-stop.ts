// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/open-transit/core';
import { APIResource } from '@stainless-temp/open-transit/resource';
import { isRequestOptions } from '@stainless-temp/open-transit/core';
import * as ArrivalsAndDeparturesForStopAPI from '@stainless-temp/open-transit/resources/arrivals-and-departures-for-stop';

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
