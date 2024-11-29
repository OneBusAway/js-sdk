// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class StopsForAgency extends APIResource {
  /**
   * Get stops for a specific agency
   */
  list(agencyId: string, options?: Core.RequestOptions): Core.APIPromise<StopsForAgencyListResponse> {
    return this._client.get(`/api/where/stops-for-agency/${agencyId}.json`, options);
  }
}

export interface StopsForAgencyListResponse extends Shared.ResponseWrapper {
  limitExceeded: boolean;

  list: Array<StopsForAgencyListResponse.List>;

  references: Shared.References;

  outOfRange?: boolean;
}

export namespace StopsForAgencyListResponse {
  export interface List {
    id: string;

    lat: number;

    lon: number;

    name: string;

    parent: string;

    routeIds: Array<string>;

    staticRouteIds: Array<string>;

    code?: string;

    direction?: string;

    locationType?: number;

    wheelchairBoarding?: string;
  }
}

export declare namespace StopsForAgency {
  export { type StopsForAgencyListResponse as StopsForAgencyListResponse };
}
