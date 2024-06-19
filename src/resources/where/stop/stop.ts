// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ArrivalAndDepartureAPI from './arrival-and-departure';
import * as ArrivalsAndDeparturesAPI from './arrivals-and-departures';

export class Stop extends APIResource {
  arrivalAndDeparture: ArrivalAndDepartureAPI.ArrivalAndDeparture =
    new ArrivalAndDepartureAPI.ArrivalAndDeparture(this._client);
  arrivalsAndDepartures: ArrivalsAndDeparturesAPI.ArrivalsAndDepartures =
    new ArrivalsAndDeparturesAPI.ArrivalsAndDepartures(this._client);
}

export namespace Stop {
  export import ArrivalAndDeparture = ArrivalAndDepartureAPI.ArrivalAndDeparture;
  export import ArrivalAndDepartureRetrieveResponse = ArrivalAndDepartureAPI.ArrivalAndDepartureRetrieveResponse;
  export import ArrivalAndDepartureRetrieveParams = ArrivalAndDepartureAPI.ArrivalAndDepartureRetrieveParams;
  export import ArrivalsAndDepartures = ArrivalsAndDeparturesAPI.ArrivalsAndDepartures;
  export import ArrivalsAndDepartureListResponse = ArrivalsAndDeparturesAPI.ArrivalsAndDepartureListResponse;
}
