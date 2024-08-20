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
  const routeId = '1_100223';

  const query = {
    date: '2024-08-20', // response code 510 - returned if the route has no schedules for the day requested
  };

  const response = await oba.scheduleForRoute.retrieve(routeId, query);

  console.log(response.data);
}

main();
