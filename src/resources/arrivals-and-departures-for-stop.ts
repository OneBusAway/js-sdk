// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';

export class ArrivalsAndDeparturesForStop extends APIResource {
  /**
   * arrivals-and-departures-for-stop
   */
  retrieve(stopId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/api/where/arrivals-and-departures-for-stop/stopID.json`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
