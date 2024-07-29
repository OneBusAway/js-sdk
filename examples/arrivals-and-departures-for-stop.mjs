import onebusaway from '../dist/index.mjs';
import { loadSettings } from './helpers/load-env.mjs';

// Load settings from .env file, if it exists.
// If not, we'll use the Puget Sound server URL (which is the default in the SDK)
// and the 'TEST' API key.
const settings = loadSettings({ apiKey: 'TEST' });

// Create a new instance of the OneBusAway SDK with the settings we loaded.
const oba = new onebusaway(settings);

async function main() {
  // Define the query parameters
  const query = {
    tripId: '1_604670535', // Replace with actual trip ID
    serviceDate: '1810918000000', // Replace with actual service date in milliseconds since epoch
  };

  const stopId = '1_75403'; // Replace with actual stop ID

  // Retrieve arrival and departure information
  const response = await oba.arrivalAndDeparture.list(stopId, query);

  // Example to access specific data
  const arrivalsAndDepartures = response.data.entry.arrivalsAndDepartures;

  // Print details for each arrival and departure
  arrivalsAndDepartures.forEach((ad) => {
    console.log(`Route: ${ad.routeShortName}`);
    console.log(`Trip Headsign: ${ad.tripHeadsign}`);
    console.log(`Predicted Arrival Time: ${new Date(ad.predictedArrivalTime)}`);
    console.log(`Scheduled Arrival Time: ${new Date(ad.scheduledArrivalTime)}`);
    console.log(`Vehicle ID: ${ad.vehicleId}`);
    console.log('');
  });
}

main();
