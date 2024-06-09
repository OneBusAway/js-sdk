import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  baseURL: 'https://api.pugetsound.onebusaway.org',
  apiKey: 'TEST',
});

async function main() {
  const response = await oba.agenciesWithCoverage.retrieve();
  console.log(response);
}

main();
