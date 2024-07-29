import onebusaway from '../dist/index.mjs';
import { loadSettings } from './helpers/load-env.mjs';

// TODO: FIXME
//
// This example will need to be updated once the `vehicles-for-agency` method is added to the SDK.
// Once that happens, we can request that endpoint, grab the first vehicle ID, and use it in the
// `tripForVehicle` method.

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
  const response = await oba.tripForVehicle.retrieve('40_9801');
  console.log(response.data.entry);
}

main();
