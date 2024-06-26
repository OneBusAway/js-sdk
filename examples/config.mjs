import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  apiKey: 'TEST',
});

async function main() {
  const response = await oba.config.retrieve();
  console.log(response);
}

main();
