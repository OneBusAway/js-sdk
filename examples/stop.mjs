import onebusaway from '../dist/index.mjs';
import { loadSettings } from './helpers/load-env.mjs';

// Load settings from .env file, if it exists.
// If not, we'll use the Puget Sound server URL (which is the default in the SDK)
// and the 'TEST' API key.
const settings = loadSettings({ apiKey: 'TEST' });

// Create a new instance of the OneBusAway SDK with the settings we loaded.
const oba = new onebusaway(settings);

async function main() {
  try {
    const response = await oba.stop.retrieve('1_75403');
    console.log(response.data.entry);
  } catch (error) {
    console.error(error);
  }
}

main();
