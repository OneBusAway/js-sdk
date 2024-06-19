// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AgenciesWithCoverageAPI from './agencies-with-coverage';
import * as ConfigAPI from './config';
import * as CurrentTimeAPI from './current-time';
import * as StopsForLocationAPI from './stops-for-location';
import * as StopAPI from './stop/stop';

export class Where extends APIResource {
  agenciesWithCoverage: AgenciesWithCoverageAPI.AgenciesWithCoverage =
    new AgenciesWithCoverageAPI.AgenciesWithCoverage(this._client);
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
  currentTime: CurrentTimeAPI.CurrentTime = new CurrentTimeAPI.CurrentTime(this._client);
  stopsForLocation: StopsForLocationAPI.StopsForLocation = new StopsForLocationAPI.StopsForLocation(
    this._client,
  );
  stop: StopAPI.Stop = new StopAPI.Stop(this._client);
}

export namespace Where {
  export import AgenciesWithCoverage = AgenciesWithCoverageAPI.AgenciesWithCoverage;
  export import AgenciesWithCoverageListResponse = AgenciesWithCoverageAPI.AgenciesWithCoverageListResponse;
  export import Config = ConfigAPI.Config;
  export import ConfigRetrieveResponse = ConfigAPI.ConfigRetrieveResponse;
  export import CurrentTime = CurrentTimeAPI.CurrentTime;
  export import CurrentTimeRetrieveResponse = CurrentTimeAPI.CurrentTimeRetrieveResponse;
  export import StopsForLocation = StopsForLocationAPI.StopsForLocation;
  export import StopsForLocationListResponse = StopsForLocationAPI.StopsForLocationListResponse;
  export import StopsForLocationListParams = StopsForLocationAPI.StopsForLocationListParams;
  export import Stop = StopAPI.Stop;
}
