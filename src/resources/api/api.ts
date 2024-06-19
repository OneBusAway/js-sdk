// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as WhereAPI from './where/where';

export class API extends APIResource {
  where: WhereAPI.Where = new WhereAPI.Where(this._client);
}

export namespace API {
  export import Where = WhereAPI.Where;
}
