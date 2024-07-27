import onebusaway from '../dist/index.mjs';

const oba = new onebusaway({
  apiKey: 'TEST',
});

async function main() {
  try {
    const response = await oba.stop.retrieve('1_75403');
    console.log(response.data.entry);
  } catch (error) {
    console.error(error);
  }
}

main();
