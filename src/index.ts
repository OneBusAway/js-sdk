// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

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

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace OnebusawaySDK {
  export import RequestOptions = Core.RequestOptions;

  export import AgenciesWithCoverage = API.AgenciesWithCoverage;
  export import AgenciesWithCoverageListResponse = API.AgenciesWithCoverageListResponse;

  export import Agency = API.Agency;
  export import AgencyRetrieveResponse = API.AgencyRetrieveResponse;

  export import VehiclesForAgency = API.VehiclesForAgency;
  export import VehiclesForAgencyListResponse = API.VehiclesForAgencyListResponse;
  export import VehiclesForAgencyListParams = API.VehiclesForAgencyListParams;

  export import Config = API.Config;
  export import ConfigRetrieveResponse = API.ConfigRetrieveResponse;

  export import CurrentTime = API.CurrentTime;
  export import CurrentTimeRetrieveResponse = API.CurrentTimeRetrieveResponse;

  export import StopsForLocation = API.StopsForLocation;
  export import StopsForLocationListResponse = API.StopsForLocationListResponse;
  export import StopsForLocationListParams = API.StopsForLocationListParams;

  export import StopsForRoute = API.StopsForRoute;
  export import StopsForRouteListResponse = API.StopsForRouteListResponse;
  export import StopsForRouteListParams = API.StopsForRouteListParams;

  export import Stop = API.Stop;
  export import StopRetrieveResponse = API.StopRetrieveResponse;

  export import StopIDsForAgency = API.StopIDsForAgency;
  export import StopIDsForAgencyListResponse = API.StopIDsForAgencyListResponse;

  export import ScheduleForStop = API.ScheduleForStop;
  export import ScheduleForStopRetrieveResponse = API.ScheduleForStopRetrieveResponse;
  export import ScheduleForStopRetrieveParams = API.ScheduleForStopRetrieveParams;

  export import Route = API.Route;
  export import RouteRetrieveResponse = API.RouteRetrieveResponse;

  export import RouteIDsForAgency = API.RouteIDsForAgency;
  export import RouteIDsForAgencyListResponse = API.RouteIDsForAgencyListResponse;

  export import RoutesForLocation = API.RoutesForLocation;
  export import RoutesForLocationListResponse = API.RoutesForLocationListResponse;
  export import RoutesForLocationListParams = API.RoutesForLocationListParams;

  export import RoutesForAgency = API.RoutesForAgency;
  export import RoutesForAgencyListResponse = API.RoutesForAgencyListResponse;

  export import ScheduleForRoute = API.ScheduleForRoute;
  export import ScheduleForRouteRetrieveResponse = API.ScheduleForRouteRetrieveResponse;
  export import ScheduleForRouteRetrieveParams = API.ScheduleForRouteRetrieveParams;

  export import ArrivalAndDeparture = API.ArrivalAndDeparture;
  export import ArrivalAndDepartureRetrieveResponse = API.ArrivalAndDepartureRetrieveResponse;
  export import ArrivalAndDepartureListResponse = API.ArrivalAndDepartureListResponse;
  export import ArrivalAndDepartureRetrieveParams = API.ArrivalAndDepartureRetrieveParams;
  export import ArrivalAndDepartureListParams = API.ArrivalAndDepartureListParams;

  export import Trip = API.Trip;
  export import TripRetrieveResponse = API.TripRetrieveResponse;

  export import TripsForLocation = API.TripsForLocation;
  export import TripsForLocationListResponse = API.TripsForLocationListResponse;
  export import TripsForLocationListParams = API.TripsForLocationListParams;

  export import TripDetails = API.TripDetails;
  export import TripDetailRetrieveResponse = API.TripDetailRetrieveResponse;
  export import TripDetailRetrieveParams = API.TripDetailRetrieveParams;

  export import TripForVehicle = API.TripForVehicle;
  export import TripForVehicleRetrieveResponse = API.TripForVehicleRetrieveResponse;
  export import TripForVehicleRetrieveParams = API.TripForVehicleRetrieveParams;

  export import TripsForRoute = API.TripsForRoute;
  export import TripsForRouteListResponse = API.TripsForRouteListResponse;
  export import TripsForRouteListParams = API.TripsForRouteListParams;

  export import ReportProblemWithStop = API.ReportProblemWithStop;
  export import ReportProblemWithStopRetrieveParams = API.ReportProblemWithStopRetrieveParams;

  export import ReportProblemWithTrip = API.ReportProblemWithTrip;
  export import ReportProblemWithTripRetrieveParams = API.ReportProblemWithTripRetrieveParams;

  export import SearchForStop = API.SearchForStop;
  export import SearchForStopListResponse = API.SearchForStopListResponse;
  export import SearchForStopListParams = API.SearchForStopListParams;

  export import SearchForRoute = API.SearchForRoute;
  export import SearchForRouteListResponse = API.SearchForRouteListResponse;
  export import SearchForRouteListParams = API.SearchForRouteListParams;

  export import Block = API.Block;
  export import BlockRetrieveResponse = API.BlockRetrieveResponse;

  export import Shape = API.Shape;
  export import ShapeRetrieveResponse = API.ShapeRetrieveResponse;

  export import References = API.References;
  export import ResponseWrapper = API.ResponseWrapper;
}

export default OnebusawaySDK;
