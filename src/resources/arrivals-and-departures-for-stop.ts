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
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArrivalsAndDeparturesForStopRetrieveResponse> {
    return this._client.get(`/api/where/arrivals-and-departures-for-stop/stopID.json`, options);
  }
}

export interface ArrivalsAndDeparturesForStopRetrieveResponse {
  code: number;

  currentTime: number;

  text: string;

  version: number;

  data?: ArrivalsAndDeparturesForStopRetrieveResponse.Data;
}

export namespace ArrivalsAndDeparturesForStopRetrieveResponse {
  export interface Data {
    entry?: Data.Entry;

    references?: Data.References;
  }

  export namespace Data {
    export interface Entry {
      id?: string;

      blockId?: string;

      directionId?: string;

      peakOffpeak?: number;

      routeId?: string;

      routeShortName?: string;

      serviceId?: string;

      shapeId?: string;

      timeZone?: string;

      tripHeadsign?: string;

      tripShortName?: string;
    }

    export interface References {
      agencies?: Array<References.Agency>;

      routes?: Array<References.Route>;

      situations?: Array<unknown>;

      stops?: Array<unknown>;

      stopTimes?: Array<unknown>;

      trips?: Array<unknown>;
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
    }
  }
}

export namespace ArrivalsAndDeparturesForStop {
  export import ArrivalsAndDeparturesForStopRetrieveResponse = ArrivalsAndDeparturesForStopAPI.ArrivalsAndDeparturesForStopRetrieveResponse;
}
