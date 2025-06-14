// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OnebusawaySDK } from './index';

export abstract class APIResource {
  protected _client: OnebusawaySDK;

  constructor(client: OnebusawaySDK) {
    this._client = client;
  }
}
