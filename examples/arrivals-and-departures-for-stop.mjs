import OnebusawaySDK from 'onebusaway-sdk';

// Initialize the SDK with your API key
const oneBusAway = new OnebusawaySDK({
  apiKey: process.env['ONEBUSAWAY_API_KEY'] || 'TEST',
  baseURL: 'http://api.pugetsound.onebusaway.org', // pass the region's base URL
});

async function main() {
  // Define the query parameters
  const query = {
    tripId: '1_604670535', // Replace with actual trip ID
    serviceDate: '1810918000000', // Replace with actual service date in milliseconds since epoch
  };

  const stopId = '1_75403'; // Replace with actual stop ID

  // Retrieve arrival and departure information
  const response = await oneBusAway.arrivalAndDeparture.list(stopId, query);

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

// Run the main function
main();
