import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  apiKey: 'TEST',
});

async function main() {
  const response = await oba.stopsForLocation.retrieve({
    lat: 47.653435,
    lon: -122.305641,
  });
  console.log(response.data.list[0].direction);
}

main();
