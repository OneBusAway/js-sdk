import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  apiKey: 'TEST',
});

async function main() {
  const query = {
    tripId: '1_604670535',
    serviceDate: '1810918000000',
  };
  const stopId = '1_75403';
  const response = await oba.arrivalAndDeparture.list(stopId, query);

  console.log(response);
}
main();
