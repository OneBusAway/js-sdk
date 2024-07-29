import onebusaway from '../dist/index.mjs';
import { loadSettings } from './helpers/load-env.mjs';

// Load settings from .env file, if it exists.
// If not, we'll use the Puget Sound server URL (which is the default in the SDK)
// and the 'TEST' API key.
const settings = loadSettings({ apiKey: 'TEST' });

// Create a new instance of the OneBusAway SDK with the settings we loaded.
const oba = new onebusaway(settings);

async function main() {
  const spaceNeedleStops = await oba.stopsForLocation.retrieve({
    lat: 47.6205,
    lon: -122.3493,
    radius: 500,
  });

  const stops = spaceNeedleStops.data?.list;
  const references = spaceNeedleStops.data.references;

  // make it easy to look up routes by ID.
  const referenceMap = references.routes.reduce((acc, route) => {
    acc[route.id] = route;
    return acc;
  }, {});

  for (const stop of stops) {
    console.log(`${stop.name} (${stop.lat}, ${stop.lon})`);
    console.log('  Routes:');

    for (const routeId of stop.routeIds) {
      const route = referenceMap[routeId];

      // Get a string that looks like "D Line - Blue Ridge/Crown Hill - Ballard - Downtown Seattle"
      const description = [route.nullSafeShortName, route.description]
        .filter((e) => e.length > 0)
        .join(' - ');
      console.log(`    ${description}`);
    }

    console.log('');
  }
}

main();
