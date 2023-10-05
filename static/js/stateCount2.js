// Define the URL for the API data
const apiUrl =
  "https://developer.nrel.gov/api/alt-fuel-stations/v1.geojson?&api_key=NFwYdHUM4ZpItnrfWegNs0sBSvdUplNebaTPO3RZ&fuel_type=ELEC&country=US";

// Load the GeoJSON data using D3
d3.json(apiUrl, function (error, data) {
  if (error) {
    console.error("Error loading GeoJSON data:", error);
    return;
  }

  // Initialize variables to store state data
  const stateChargerCounts = {};

  // Loop through the features in the GeoJSON data
  data.features.forEach(function (feature) {
    // Extract state abbreviation from properties
    const stateAbbreviation = feature.properties.state;

    // Increment the charger count for the state
    if (!stateChargerCounts[stateAbbreviation]) {
      stateChargerCounts[stateAbbreviation] = 0;
    }

    stateChargerCounts[stateAbbreviation]++;
  });

  // Create an array of state objects with total charger counts
  const stateChargerArray = Object.keys(stateChargerCounts).map(function (
    stateAbbreviation
  ) {
    return {
      state: stateAbbreviation,
      totalChargers: stateChargerCounts[stateAbbreviation],
    };
  });

  // Sort states by total charger count in descending order
  stateChargerArray.sort(function (a, b) {
    return b.totalChargers - a.totalChargers;
  });

  // Extract sorted state abbreviations from the sorted array, excluding unwanted states
  const sortedStates = stateChargerArray
    .filter(function (stateObj) {
      return (
        stateObj.state !== "BC" &&
        stateObj.state !== "PR" &&
        stateObj.state !== null
      );
    })
    .map(function (stateObj) {
      return stateObj.state;
    });

  // Create a different variable name for the data dictionary
  const stateChargerData = {};

  // Define the rank ranges and corresponding fillKey values
  const rankRanges = [
    { minRank: 1, maxRank: 8, fillKey: 1 },
    { minRank: 9, maxRank: 17, fillKey: 2 },
    { minRank: 18, maxRank: 26, fillKey: 3 },
    { minRank: 27, maxRank: 35, fillKey: 4 },
    { minRank: 36, maxRank: 44, fillKey: 5 },
    { minRank: 45, maxRank: Infinity, fillKey: 6 },
  ];

  // Loop through sorted states and assign ranks and fill keys based on rank ranges
  sortedStates.forEach(function (stateAbbreviation, index) {
    const rank = index + 1;
    const fillKeyObj = rankRanges.find((range) => rank >= range.minRank && rank <= range.maxRank);

    if (fillKeyObj) {
      const fillKey = fillKeyObj.fillKey;
      stateChargerData[stateAbbreviation] = {
        rank: rank,
        fillKey: fillKey,
        totalChargers: stateChargerCounts[stateAbbreviation],
      };
    }
  });
  
  // Loop through sorted state abbreviations and log them
  sortedStates.forEach(function (stateAbbreviation) {
    console.log(stateAbbreviation + ": " + stateChargerData[stateAbbreviation].fillKey);
  });

  // Create a DataMap container
  var chargers = new Datamap({
    scope: 'usa',
    projection: 'mercator', // Specify the map projection
    element: document.getElementById('container'),
    geographyConfig: {
      highlightBorderColor: '#bada55',
      popupTemplate: function (geography, data) {
        return (
          '<div class="hoverinfo">' +
          geography.properties.name +
          '<br>Rank: ' +
          (data ? data.rank : 'N/A') + // Handle the case where data is missing
          '<br>Total Chargers: ' +
          (data ? data.totalChargers : 'N/A') + // Include total chargers in the popup
          '</div>'
        );
      },
      highlightBorderWidth: 3,
    },

    fills: {
      '1': '#4CAF50',
      '2': '#8BC34A',
      '3': '#FFEB3B',
      '4': '#FFC107',
      '5': '#FF9800',
      '6': '#FF5722',
      defaultFill: '#EDDC4E',
    },
    data: stateChargerData, // Pass the state charger data here
  });

  chargers.labels();
});
