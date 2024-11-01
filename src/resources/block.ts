// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Block extends APIResource {
  /**
   * Get details of a specific block by ID
   */
  retrieve(blockId: string, options?: Core.RequestOptions): Core.APIPromise<BlockRetrieveResponse> {
    return this._client.get(`/api/where/block/${blockId}.json`, options);
  }
}

export interface BlockRetrieveResponse extends Shared.ResponseWrapper {
  data: BlockRetrieveResponse.Data;
}

export namespace BlockRetrieveResponse {
  export interface Data {
    entry: Data.Entry;

    references: Shared.References;
  }

  export namespace Data {
    export interface Entry {
      id: string;

      configurations: Array<Entry.Configuration>;
    }

    export namespace Entry {
      export interface Configuration {
        activeServiceIds: Array<string>;

        trips: Array<Configuration.Trip>;

        inactiveServiceIds?: Array<string>;
      }

      export namespace Configuration {
        export interface Trip {
          accumulatedSlackTime: number;

          blockStopTimes: Array<Trip.BlockStopTime>;

          distanceAlongBlock: number;

          tripId: string;
        }

        export namespace Trip {
          export interface BlockStopTime {
            accumulatedSlackTime: number;

            blockSequence: number;

            distanceAlongBlock: number;

            stopTime: BlockStopTime.StopTime;
          }

          export namespace BlockStopTime {
            export interface StopTime {
              arrivalTime: number;

              departureTime: number;

              stopId: string;

              dropOffType?: number;

              pickupType?: number;
            }
          }
        }
      }
    }
  }
}

export declare namespace Block {
  export { type BlockRetrieveResponse as BlockRetrieveResponse };
}
