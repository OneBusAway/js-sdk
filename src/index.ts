// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { AgenciesWithCoverage, AgenciesWithCoverageListResponse } from './resources/agencies-with-coverage';
import { Agency, AgencyRetrieveResponse } from './resources/agency';
import {
  ArrivalAndDeparture,
  ArrivalAndDepartureListParams,
  ArrivalAndDepartureListResponse,
  ArrivalAndDepartureRetrieveParams,
  ArrivalAndDepartureRetrieveResponse,
} from './resources/arrival-and-departure';
import { Block, BlockRetrieveResponse } from './resources/block';
import { Config, ConfigRetrieveResponse } from './resources/config';
import { CurrentTime, CurrentTimeRetrieveResponse } from './resources/current-time';
import {
  ReportProblemWithStop,
  ReportProblemWithStopRetrieveParams,
} from './resources/report-problem-with-stop';
import {
  ReportProblemWithTrip,
  ReportProblemWithTripRetrieveParams,
} from './resources/report-problem-with-trip';
import { Route, RouteRetrieveResponse } from './resources/route';
import { RouteIDsForAgency, RouteIDsForAgencyListResponse } from './resources/route-ids-for-agency';
import { RoutesForAgency, RoutesForAgencyListResponse } from './resources/routes-for-agency';
import {
  RoutesForLocation,
  RoutesForLocationListParams,
  RoutesForLocationListResponse,
} from './resources/routes-for-location';
import {
  ScheduleForRoute,
  ScheduleForRouteRetrieveParams,
  ScheduleForRouteRetrieveResponse,
} from './resources/schedule-for-route';
import {
  ScheduleForStop,
  ScheduleForStopRetrieveParams,
  ScheduleForStopRetrieveResponse,
} from './resources/schedule-for-stop';
import {
  SearchForRoute,
  SearchForRouteListParams,
  SearchForRouteListResponse,
} from './resources/search-for-route';
import {
  SearchForStop,
  SearchForStopListParams,
  SearchForStopListResponse,
} from './resources/search-for-stop';
import { Shape, ShapeRetrieveResponse } from './resources/shape';
import { Stop, StopRetrieveResponse } from './resources/stop';
import { StopIDsForAgency, StopIDsForAgencyListResponse } from './resources/stop-ids-for-agency';
import {
  StopsForLocation,
  StopsForLocationListParams,
  StopsForLocationListResponse,
} from './resources/stops-for-location';
import {
  StopsForRoute,
  StopsForRouteListParams,
  StopsForRouteListResponse,
} from './resources/stops-for-route';
import { Trip, TripRetrieveResponse } from './resources/trip';
import { TripDetailRetrieveParams, TripDetailRetrieveResponse, TripDetails } from './resources/trip-details';
import {
  TripForVehicle,
  TripForVehicleRetrieveParams,
  TripForVehicleRetrieveResponse,
} from './resources/trip-for-vehicle';
import {
  TripsForLocation,
  TripsForLocationListParams,
  TripsForLocationListResponse,
} from './resources/trips-for-location';
import {
  TripsForRoute,
  TripsForRouteListParams,
  TripsForRouteListResponse,
} from './resources/trips-for-route';
import {
  VehiclesForAgency,
  VehiclesForAgencyListParams,
  VehiclesForAgencyListResponse,
} from './resources/vehicles-for-agency';

export interface ClientOptions {
  /**
   * Defaults to process.env['ONEBUSAWAY_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['ONEBUSAWAY_SDK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Onebusaway SDK API.
 */
export class OnebusawaySDK extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Onebusaway SDK API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['ONEBUSAWAY_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['ONEBUSAWAY_SDK_BASE_URL'] ?? https://api.pugetsound.onebusaway.org] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('ONEBUSAWAY_SDK_BASE_URL'),
    apiKey = Core.readEnv('ONEBUSAWAY_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.OnebusawaySDKError(
        "The ONEBUSAWAY_API_KEY environment variable is missing or empty; either provide it, or instantiate the OnebusawaySDK client with an apiKey option, like new OnebusawaySDK({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.pugetsound.onebusaway.org`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  agenciesWithCoverage: API.AgenciesWithCoverage = new API.AgenciesWithCoverage(this);
  agency: API.Agency = new API.Agency(this);
  vehiclesForAgency: API.VehiclesForAgency = new API.VehiclesForAgency(this);
  config: API.Config = new API.Config(this);
  currentTime: API.CurrentTime = new API.CurrentTime(this);
  stopsForLocation: API.StopsForLocation = new API.StopsForLocation(this);
  stopsForRoute: API.StopsForRoute = new API.StopsForRoute(this);
  stop: API.Stop = new API.Stop(this);
  stopIdsForAgency: API.StopIDsForAgency = new API.StopIDsForAgency(this);
  scheduleForStop: API.ScheduleForStop = new API.ScheduleForStop(this);
  route: API.Route = new API.Route(this);
  routeIdsForAgency: API.RouteIDsForAgency = new API.RouteIDsForAgency(this);
  routesForLocation: API.RoutesForLocation = new API.RoutesForLocation(this);
  routesForAgency: API.RoutesForAgency = new API.RoutesForAgency(this);
  scheduleForRoute: API.ScheduleForRoute = new API.ScheduleForRoute(this);
  arrivalAndDeparture: API.ArrivalAndDeparture = new API.ArrivalAndDeparture(this);
  trip: API.Trip = new API.Trip(this);
  tripsForLocation: API.TripsForLocation = new API.TripsForLocation(this);
  tripDetails: API.TripDetails = new API.TripDetails(this);
  tripForVehicle: API.TripForVehicle = new API.TripForVehicle(this);
  tripsForRoute: API.TripsForRoute = new API.TripsForRoute(this);
  reportProblemWithStop: API.ReportProblemWithStop = new API.ReportProblemWithStop(this);
  reportProblemWithTrip: API.ReportProblemWithTrip = new API.ReportProblemWithTrip(this);
  searchForStop: API.SearchForStop = new API.SearchForStop(this);
  searchForRoute: API.SearchForRoute = new API.SearchForRoute(this);
  block: API.Block = new API.Block(this);
  shape: API.Shape = new API.Shape(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return {
      key: this.apiKey,
      ...this._options.defaultQuery,
    };
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {};
  }

  static OnebusawaySDK = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static OnebusawaySDKError = Errors.OnebusawaySDKError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export {
  OnebusawaySDKError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

OnebusawaySDK.AgenciesWithCoverage = AgenciesWithCoverage;
OnebusawaySDK.Agency = Agency;
OnebusawaySDK.VehiclesForAgency = VehiclesForAgency;
OnebusawaySDK.Config = Config;
OnebusawaySDK.CurrentTime = CurrentTime;
OnebusawaySDK.StopsForLocation = StopsForLocation;
OnebusawaySDK.StopsForRoute = StopsForRoute;
OnebusawaySDK.Stop = Stop;
OnebusawaySDK.StopIDsForAgency = StopIDsForAgency;
OnebusawaySDK.ScheduleForStop = ScheduleForStop;
OnebusawaySDK.Route = Route;
OnebusawaySDK.RouteIDsForAgency = RouteIDsForAgency;
OnebusawaySDK.RoutesForLocation = RoutesForLocation;
OnebusawaySDK.RoutesForAgency = RoutesForAgency;
OnebusawaySDK.ScheduleForRoute = ScheduleForRoute;
OnebusawaySDK.ArrivalAndDeparture = ArrivalAndDeparture;
OnebusawaySDK.Trip = Trip;
OnebusawaySDK.TripsForLocation = TripsForLocation;
OnebusawaySDK.TripDetails = TripDetails;
OnebusawaySDK.TripForVehicle = TripForVehicle;
OnebusawaySDK.TripsForRoute = TripsForRoute;
OnebusawaySDK.ReportProblemWithStop = ReportProblemWithStop;
OnebusawaySDK.ReportProblemWithTrip = ReportProblemWithTrip;
OnebusawaySDK.SearchForStop = SearchForStop;
OnebusawaySDK.SearchForRoute = SearchForRoute;
OnebusawaySDK.Block = Block;
OnebusawaySDK.Shape = Shape;

export declare namespace OnebusawaySDK {
  export type RequestOptions = Core.RequestOptions;

  export {
    AgenciesWithCoverage as AgenciesWithCoverage,
    type AgenciesWithCoverageListResponse as AgenciesWithCoverageListResponse,
  };

  export { Agency as Agency, type AgencyRetrieveResponse as AgencyRetrieveResponse };

  export {
    VehiclesForAgency as VehiclesForAgency,
    type VehiclesForAgencyListResponse as VehiclesForAgencyListResponse,
    type VehiclesForAgencyListParams as VehiclesForAgencyListParams,
  };

  export { Config as Config, type ConfigRetrieveResponse as ConfigRetrieveResponse };

  export { CurrentTime as CurrentTime, type CurrentTimeRetrieveResponse as CurrentTimeRetrieveResponse };

  export {
    StopsForLocation as StopsForLocation,
    type StopsForLocationListResponse as StopsForLocationListResponse,
    type StopsForLocationListParams as StopsForLocationListParams,
  };

  export {
    StopsForRoute as StopsForRoute,
    type StopsForRouteListResponse as StopsForRouteListResponse,
    type StopsForRouteListParams as StopsForRouteListParams,
  };

  export { Stop as Stop, type StopRetrieveResponse as StopRetrieveResponse };

  export {
    StopIDsForAgency as StopIDsForAgency,
    type StopIDsForAgencyListResponse as StopIDsForAgencyListResponse,
  };

  export {
    ScheduleForStop as ScheduleForStop,
    type ScheduleForStopRetrieveResponse as ScheduleForStopRetrieveResponse,
    type ScheduleForStopRetrieveParams as ScheduleForStopRetrieveParams,
  };

  export { Route as Route, type RouteRetrieveResponse as RouteRetrieveResponse };

  export {
    RouteIDsForAgency as RouteIDsForAgency,
    type RouteIDsForAgencyListResponse as RouteIDsForAgencyListResponse,
  };

  export {
    RoutesForLocation as RoutesForLocation,
    type RoutesForLocationListResponse as RoutesForLocationListResponse,
    type RoutesForLocationListParams as RoutesForLocationListParams,
  };

  export {
    RoutesForAgency as RoutesForAgency,
    type RoutesForAgencyListResponse as RoutesForAgencyListResponse,
  };

  export {
    ScheduleForRoute as ScheduleForRoute,
    type ScheduleForRouteRetrieveResponse as ScheduleForRouteRetrieveResponse,
    type ScheduleForRouteRetrieveParams as ScheduleForRouteRetrieveParams,
  };

  export {
    ArrivalAndDeparture as ArrivalAndDeparture,
    type ArrivalAndDepartureRetrieveResponse as ArrivalAndDepartureRetrieveResponse,
    type ArrivalAndDepartureListResponse as ArrivalAndDepartureListResponse,
    type ArrivalAndDepartureRetrieveParams as ArrivalAndDepartureRetrieveParams,
    type ArrivalAndDepartureListParams as ArrivalAndDepartureListParams,
  };

  export { Trip as Trip, type TripRetrieveResponse as TripRetrieveResponse };

  export {
    TripsForLocation as TripsForLocation,
    type TripsForLocationListResponse as TripsForLocationListResponse,
    type TripsForLocationListParams as TripsForLocationListParams,
  };

  export {
    TripDetails as TripDetails,
    type TripDetailRetrieveResponse as TripDetailRetrieveResponse,
    type TripDetailRetrieveParams as TripDetailRetrieveParams,
  };

  export {
    TripForVehicle as TripForVehicle,
    type TripForVehicleRetrieveResponse as TripForVehicleRetrieveResponse,
    type TripForVehicleRetrieveParams as TripForVehicleRetrieveParams,
  };

  export {
    TripsForRoute as TripsForRoute,
    type TripsForRouteListResponse as TripsForRouteListResponse,
    type TripsForRouteListParams as TripsForRouteListParams,
  };

  export {
    ReportProblemWithStop as ReportProblemWithStop,
    type ReportProblemWithStopRetrieveParams as ReportProblemWithStopRetrieveParams,
  };

  export {
    ReportProblemWithTrip as ReportProblemWithTrip,
    type ReportProblemWithTripRetrieveParams as ReportProblemWithTripRetrieveParams,
  };

  export {
    SearchForStop as SearchForStop,
    type SearchForStopListResponse as SearchForStopListResponse,
    type SearchForStopListParams as SearchForStopListParams,
  };

  export {
    SearchForRoute as SearchForRoute,
    type SearchForRouteListResponse as SearchForRouteListResponse,
    type SearchForRouteListParams as SearchForRouteListParams,
  };

  export { Block as Block, type BlockRetrieveResponse as BlockRetrieveResponse };

  export { Shape as Shape, type ShapeRetrieveResponse as ShapeRetrieveResponse };

  export type References = API.References;
  export type ResponseWrapper = API.ResponseWrapper;
}

export default OnebusawaySDK;
