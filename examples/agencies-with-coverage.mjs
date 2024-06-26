import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  apiKey: 'TEST',
});

async function main() {
  const response = await oba.agenciesWithCoverage.retrieve();
  console.log(response.data);
}

main();
