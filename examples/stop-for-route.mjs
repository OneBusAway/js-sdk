import onebusaway from '../dist/index.mjs';
import { loadSettings } from './helpers/load-env.mjs';

// Load settings from .env file, if it exists.
// If not, we'll use the Puget Sound server URL (which is the default in the SDK)
// and the 'TEST' API key.
const settings = loadSettings({ apiKey: 'TEST' });

// Create a new instance of the OneBusAway SDK with the settings we loaded.
const oba = new onebusaway(settings);

async function main() {
  const routeId = '1_100224';
  const response = await oba.stopsForRoute.list(routeId);

  if (response?.data) {
    console.log(response.data);
  }
}

main();
