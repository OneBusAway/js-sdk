import onebusaway from '../dist/index.mjs';
import { loadSettings } from './helpers/load-env.mjs';

// Load settings from .env file, if it exists. If not, we'll use the
// Puget Sound server URL (which is also the default in the SDK) and
// the 'TEST' API key.
const settings = loadSettings({
  apiKey: 'TEST',
  baseUrl: 'https://api.pugetsound.onebusaway.org/',
});

// Create a new instance of the OneBusAway SDK with the settings we loaded.
const oba = new onebusaway(settings);

async function main() {
  const stopId = '1_75403';
  const response = await oba.scheduleForStop.retrieve(stopId);

  for (let route of response.data.entry.stopRouteSchedules) {
    console.log(`Route ${route.routeId}`);
    for (let trip of route.stopRouteDirectionSchedules[0].scheduleStopTimes) {
      console.log(`  ${trip.tripId} ${trip.arrivalTime}`);
    }
  }
}

main();
