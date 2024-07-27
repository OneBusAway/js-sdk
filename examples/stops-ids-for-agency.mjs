import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  apiKey: 'TEST',
});

async function main() {
  const response = await oba.stopIdsForAgency.list('40');
  response.data.list.forEach((stop) => {
    console.log(stop);
  });
}

main();
