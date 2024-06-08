import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  baseURL: 'https://api.pugetsound.onebusaway.org',
});

async function main() {
  const response = await oba.agenciesWithCoverage.retrive();
  console.log(response.status);
}

main();
