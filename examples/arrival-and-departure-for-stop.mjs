import onebusaway from '../dist/index.mjs';
import { loadSettings } from './helpers/load-env.mjs';

// TODO: FIXME
//
// This example needs to be updated to first request data from `oba.arrivalAndDeparture.list()`
// per the documentation at https://developer.onebusaway.org/api/where/methods/arrival-and-departure-for-stop

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
  const query = {
    tripId: '1_604670535',
    serviceDate: '1810918000000',
  };
  const stopId = '1_75403';
  const response = await oba.arrivalAndDeparture.retrieve(stopId, query);

  console.log(response);
}
main();
