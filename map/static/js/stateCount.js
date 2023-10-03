const url = "https://developer.nrel.gov/api/alt-fuel-stations/v1.geojson?&api_key=NFwYdHUM4ZpItnrfWegNs0sBSvdUplNebaTPO3RZ&fuel_type=ELEC&country=US";


// Function to fetch data from the API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Function to count stations by state
function countStationsByState(data) {
  const stateCounts = {};

  // Loop through the data to calculate total station counts by state
  data.features.forEach((feature) => {
    const state = feature.properties.state;

    if (!stateCounts[state]) {
      stateCounts[state] = 0;
    }

    stateCounts[state]++;
  });

  return stateCounts;
}
// Function to rank states based on station counts and divide into groups
function rankAndGroupStatesByStationCount(data) {
  const stationCounts = countStationsByState(data);

  // Sort states by station count in descending order
  const sortedStates = Object.keys(stationCounts).sort((a, b) => stationCounts[b] - stationCounts[a]);

  // Calculate the number of states in each group
  const numStates = sortedStates.length;
  const statesPerGroup = Math.ceil(numStates / 10);

  // Create a ranking and grouping object
  const stateRankingAndGrouping = {};

  sortedStates.forEach((state, index) => {
    const rank = index + 1;
    const group = Math.ceil(rank / statesPerGroup);

    stateRankingAndGrouping[state] = {
      fillKey: "", // You can set the fillKey as needed
      rank,
      group,
    };
  });

  return stateRankingAndGrouping;
}

// Load and process data
fetchData(url)
  .then((data) => {
    const stationCounts = countStationsByState(data);
    logStationCounts(stationCounts);

    const stateRankingAndGrouping = rankAndGroupStatesByStationCount(data);
    console.log(stateRankingAndGrouping); // Log the state ranking and grouping
  })
  .catch((error) => {
    // Handle errors
    console.error('An error occurred:', error);
  });

/* // Function to rank states based on station counts
function rankStatesByStationCount(data) {
  const stationCounts = countStationsByState(data);

  // Sort states by station count in descending order
  const sortedStates = Object.keys(stationCounts).sort((a, b) => stationCounts[b] - stationCounts[a]);

  // Create a ranking object
  const stateRanking = {};

  // Populate the ranking object with each state's rank and fillKey
  sortedStates.forEach((state, index) => {
    stateRanking[state] = {
      fillKey: "", // You can set the fillKey as needed
      rank: index + 1,
    };
  });

  return stateRanking;
}
 */


// Function to log station counts
function logStationCounts(stationCounts) {
  for (const state in stationCounts) {
    console.log(`State: ${state}, Count: ${stationCounts[state]}`);
  }
}

// Define the API URL


