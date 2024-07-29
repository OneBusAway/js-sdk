import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  apiKey: 'TEST',
});

async function main() {
  const agencyId = '40';
  const response = await oba.vehiclesForAgency.list(agencyId);

  console.log(response.data.list[0]);
}

main();
