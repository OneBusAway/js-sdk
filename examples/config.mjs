import onebusaway from '../dist/index.mjs';
import { loadSettings } from './helpers/load-env.mjs';

const settings = loadSettings({ apiKey: 'TEST' });

const oba = new onebusaway(settings);

async function main() {
  const response = await oba.config.retrieve();
  console.log(response);
}

main();
