import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  apiKey: 'TEST',
});

async function main() {
  const tripId = '40_608344966';
  const response = await oba.trip.retrieve(tripId);
  console.log(response.data);
}

main();
