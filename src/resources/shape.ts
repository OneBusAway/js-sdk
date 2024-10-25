// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ShapeAPI from './shape';
import * as Shared from './shared';

export class Shape extends APIResource {
  /**
   * Retrieve a shape (the path traveled by a transit vehicle) by ID.
   */
  retrieve(shapeId: string, options?: Core.RequestOptions): Core.APIPromise<ShapeRetrieveResponse> {
    return this._client.get(`/api/where/shape/${shapeId}.json`, options);
  }
}

export interface ShapeRetrieveResponse extends Shared.ResponseWrapper {
  data: ShapeRetrieveResponse.Data;
}

export namespace ShapeRetrieveResponse {
  export interface Data {
    entry: Data.Entry;

    references: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      length: number;

      /**
       * Encoded polyline format representing the shape of the path
       */
      points: string;

      levels?: string;
    }
  }
}

export namespace Shape {
  export type ShapeRetrieveResponse = ShapeAPI.ShapeRetrieveResponse;
}
