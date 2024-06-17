import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  apiKey: 'TEST',
});

async function main() {
  const reponse = await oba.currentTime.retrieve();
  console.log(reponse.data);
}

main();
