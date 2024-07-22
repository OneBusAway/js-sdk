import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  apiKey: 'TEST',
});

async function main() {
  const response = await oba.tripForVehicle.retrieve('40_9801');
  console.log(response.data.entry);
}

main();
