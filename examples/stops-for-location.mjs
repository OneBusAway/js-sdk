import OnebusawaySDK from 'onebusaway-sdk';

const oneBusAway = new OnebusawaySDK({
  apiKey: process.env['ONEBUSAWAY_API_KEY'] || 'test',
  baseURL: 'https://api.pugetsound.onebusaway.org', // pass the region's base URL
});

async function main() {
  const spaceNeedleStops = await oneBusAway.stopsForLocation.retrieve({
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
