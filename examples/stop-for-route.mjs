import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  apiKey: 'TEST',
});

async function main() {
  const routeId = '1_100224';
  const response = await oba.stopsForRoute.list(routeId);

  if (response?.data) {
    console.log(response.data);
  }
}

main();
