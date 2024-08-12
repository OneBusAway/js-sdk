# Shared

Types:

- <code><a href="./src/resources/shared.ts">References</a></code>
- <code><a href="./src/resources/shared.ts">ResponseWrapper</a></code>

# AgenciesWithCoverage

Types:

- <code><a href="./src/resources/agencies-with-coverage.ts">AgenciesWithCoverageRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/agencies-with-coverage.json">client.agenciesWithCoverage.<a href="./src/resources/agencies-with-coverage.ts">retrieve</a>() -> AgenciesWithCoverageRetrieveResponse</code>

# Agency

Types:

- <code><a href="./src/resources/agency.ts">AgencyRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/agency/{agencyID}.json">client.agency.<a href="./src/resources/agency.ts">retrieve</a>(agencyId) -> AgencyRetrieveResponse</code>

# VehiclesForAgency

Types:

- <code><a href="./src/resources/vehicles-for-agency.ts">VehiclesForAgencyListResponse</a></code>

Methods:

- <code title="get /api/where/vehicles-for-agency/{agencyID}.json">client.vehiclesForAgency.<a href="./src/resources/vehicles-for-agency.ts">list</a>(agencyId, { ...params }) -> VehiclesForAgencyListResponse</code>

# Config

Types:

- <code><a href="./src/resources/config.ts">ConfigRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/config.json">client.config.<a href="./src/resources/config.ts">retrieve</a>() -> ConfigRetrieveResponse</code>

# CurrentTime

Types:

- <code><a href="./src/resources/current-time.ts">CurrentTimeRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/current-time.json">client.currentTime.<a href="./src/resources/current-time.ts">retrieve</a>() -> CurrentTimeRetrieveResponse</code>

# StopsForLocation

Types:

- <code><a href="./src/resources/stops-for-location.ts">StopsForLocationRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/stops-for-location.json">client.stopsForLocation.<a href="./src/resources/stops-for-location.ts">retrieve</a>({ ...params }) -> StopsForLocationRetrieveResponse</code>

# StopsForRoute

Types:

- <code><a href="./src/resources/stops-for-route.ts">StopsForRouteListResponse</a></code>

Methods:

- <code title="get /api/where/stops-for-route/{routeID}.json">client.stopsForRoute.<a href="./src/resources/stops-for-route.ts">list</a>(routeId, { ...params }) -> StopsForRouteListResponse</code>

# Stop

Types:

- <code><a href="./src/resources/stop.ts">StopRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/stop/{stopID}.json">client.stop.<a href="./src/resources/stop.ts">retrieve</a>(stopId) -> StopRetrieveResponse</code>

# StopIDsForAgency

Types:

- <code><a href="./src/resources/stop-ids-for-agency.ts">StopIDsForAgencyListResponse</a></code>

Methods:

- <code title="get /api/where/stop-ids-for-agency/{agencyID}.json">client.stopIdsForAgency.<a href="./src/resources/stop-ids-for-agency.ts">list</a>(agencyId) -> StopIDsForAgencyListResponse</code>

# ScheduleForStop

Types:

- <code><a href="./src/resources/schedule-for-stop.ts">ScheduleForStopRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/schedule-for-stop/{stopID}.json">client.scheduleForStop.<a href="./src/resources/schedule-for-stop.ts">retrieve</a>(stopId, { ...params }) -> ScheduleForStopRetrieveResponse</code>

# Route

Types:

- <code><a href="./src/resources/route.ts">RouteRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/route/{routeID}.json">client.route.<a href="./src/resources/route.ts">retrieve</a>(routeId) -> RouteRetrieveResponse</code>

# RouteIDsForAgency

Types:

- <code><a href="./src/resources/route-ids-for-agency.ts">RouteIDsForAgencyListResponse</a></code>

Methods:

- <code title="get /api/where/route-ids-for-agency/{agencyID}.json">client.routeIdsForAgency.<a href="./src/resources/route-ids-for-agency.ts">list</a>(agencyId) -> RouteIDsForAgencyListResponse</code>

# RoutesForLocation

Types:

- <code><a href="./src/resources/routes-for-location.ts">RoutesForLocationRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/routes-for-location.json">client.routesForLocation.<a href="./src/resources/routes-for-location.ts">retrieve</a>({ ...params }) -> RoutesForLocationRetrieveResponse</code>

# RoutesForAgency

Types:

- <code><a href="./src/resources/routes-for-agency.ts">RoutesForAgencyListResponse</a></code>

Methods:

- <code title="get /api/where/routes-for-agency/{agencyID}.json">client.routesForAgency.<a href="./src/resources/routes-for-agency.ts">list</a>(agencyId) -> RoutesForAgencyListResponse</code>

# ScheduleForRoute

Types:

- <code><a href="./src/resources/schedule-for-route.ts">ScheduleForRouteRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/schedule-for-route/{routeID}.json">client.scheduleForRoute.<a href="./src/resources/schedule-for-route.ts">retrieve</a>(routeId, { ...params }) -> ScheduleForRouteRetrieveResponse</code>

# ArrivalAndDeparture

Types:

- <code><a href="./src/resources/arrival-and-departure.ts">ArrivalAndDepartureRetrieveResponse</a></code>
- <code><a href="./src/resources/arrival-and-departure.ts">ArrivalAndDepartureListResponse</a></code>

Methods:

- <code title="get /api/where/arrival-and-departure-for-stop/{stopID}.json">client.arrivalAndDeparture.<a href="./src/resources/arrival-and-departure.ts">retrieve</a>(stopId, { ...params }) -> ArrivalAndDepartureRetrieveResponse</code>
- <code title="get /api/where/arrivals-and-departures-for-stop/{stopID}.json">client.arrivalAndDeparture.<a href="./src/resources/arrival-and-departure.ts">list</a>(stopId, { ...params }) -> ArrivalAndDepartureListResponse</code>

# Trip

Types:

- <code><a href="./src/resources/trip.ts">TripRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/trip/{tripID}.json">client.trip.<a href="./src/resources/trip.ts">retrieve</a>(tripId) -> TripRetrieveResponse</code>

# TripsForLocation

Types:

- <code><a href="./src/resources/trips-for-location.ts">TripsForLocationRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/trips-for-location.json">client.tripsForLocation.<a href="./src/resources/trips-for-location.ts">retrieve</a>({ ...params }) -> TripsForLocationRetrieveResponse</code>

# TripDetails

Types:

- <code><a href="./src/resources/trip-details.ts">TripDetailRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/trip-details/{tripID}.json">client.tripDetails.<a href="./src/resources/trip-details.ts">retrieve</a>(tripId, { ...params }) -> TripDetailRetrieveResponse</code>

# TripForVehicle

Types:

- <code><a href="./src/resources/trip-for-vehicle.ts">TripForVehicleRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/trip-for-vehicle/{vehicleID}.json">client.tripForVehicle.<a href="./src/resources/trip-for-vehicle.ts">retrieve</a>(vehicleId, { ...params }) -> TripForVehicleRetrieveResponse</code>

# ReportProblemWithStop

Methods:

- <code title="get /api/where/report-problem-with-stop/{stopID}.json">client.reportProblemWithStop.<a href="./src/resources/report-problem-with-stop.ts">retrieve</a>(stopId, { ...params }) -> ResponseWrapper</code>

# ReportProblemWithTrip

Methods:

- <code title="get /api/where/report-problem-with-trip/{tripID}.json">client.reportProblemWithTrip.<a href="./src/resources/report-problem-with-trip.ts">retrieve</a>(tripId, { ...params }) -> ResponseWrapper</code>

# SearchForStop

Types:

- <code><a href="./src/resources/search-for-stop.ts">SearchForStopRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/search/stop.json">client.searchForStop.<a href="./src/resources/search-for-stop.ts">retrieve</a>({ ...params }) -> SearchForStopRetrieveResponse</code>

# SearchForRoute

Types:

- <code><a href="./src/resources/search-for-route.ts">SearchForRouteRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/search/route.json">client.searchForRoute.<a href="./src/resources/search-for-route.ts">retrieve</a>({ ...params }) -> SearchForRouteRetrieveResponse</code>

# Block

Types:

- <code><a href="./src/resources/block.ts">BlockRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/block/{blockID}.json">client.block.<a href="./src/resources/block.ts">retrieve</a>(blockId) -> BlockRetrieveResponse</code>

# Shape

Types:

- <code><a href="./src/resources/shape.ts">ShapeRetrieveResponse</a></code>

Methods:

- <code title="get /api/where/shape/{shapeID}.json">client.shape.<a href="./src/resources/shape.ts">retrieve</a>(shapeId) -> ShapeRetrieveResponse</code>
