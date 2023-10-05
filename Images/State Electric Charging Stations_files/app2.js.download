// Define the URL for your JSON data
//const url = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?&api_key=NFwYdHUM4ZpItnrfWegNs0sBSvdUplNebaTPO3RZ&fuel_typ_code=ELECTRIC";
const url = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?&api_key=NFwYdHUM4ZpItnrfWegNs0sBSvdUplNebaTPO3RZ&fuel_type=ELEC";

let data;
let topFacilityTypes;
const free_stations = [];
const paid_stations = [];

async function init() {
    try {
    // Make the API call to fetch the data
        const jsonData = await d3.json(url); // Store the JSON data as a variable
        data = jsonData;
    // Filter and populate the free and paid stations
        data.fuel_stations.forEach((station) => {
        const price = station.ev_pricing;
        if (price !== null && price === 'Free') {
            free_stations.push(station);
        } else if (price !== null && price !== 'Free') {
            paid_stations.push(station);
        }
    });

// Populate the state dropdown  
    populateStateDropdown();
    //console.log("Dropdown:", d3.select("#selDataset")); // Log the dropdown
    const defaultState = "AK"
    topFacilityTypes = findTopFacilityTypes();

// Build the initial charts
    buildPie();
    filterStations(defaultState);

// Now call buildBarChart with topFacilityTypes
    buildBarChart(defaultState, topFacilityTypes);
    const totalStations = getTotalStations(defaultState); // Implement this function to calculate the total stations
    buildGaugeChart(totalStations);

} catch (error) {
    console.error("Error initializing the page:", error);
}
}


// Function to populate the state dropdown
function populateStateDropdown() {
    let dropdown = d3.select("#selDataset");
    const uniqueStates = getUniqueStates(); // Helper function to get unique states
    uniqueStates.sort();
    uniqueStates.forEach((state) => {
        dropdown.append("option").text(state).property("value", state);
    });
}

// Helper function to get unique states
function getUniqueStates() {
    const states = data.fuel_stations.map((station) => station.state);
    return [...new Set(states)];
}

// Function to build the pie chart
function buildPie() {
// Calculate the counts
    const freeStationsCount = free_stations.length;
    const paidStationsCount = paid_stations.length;

    // Create data for the pie chart
    const plotData = [{
        labels: ['Free Stations', 'Paid Stations'],
        values: [freeStationsCount, paidStationsCount],
        type: 'pie'
    }];

    // Define layout options
    const layout = {
        title: 'Free vs. Paid Stations',
    };

    // Create the pie chart using Plotly
    Plotly.newPlot('pie-chart', plotData, layout);
}

// Function to handle dropdown selection change
function optionChanged(selectedState) {
    //clear exiting data
    // Update the pie chart based on the selected state
    filterStations(selectedState);
    buildBarChart(selectedState, topFacilityTypes);
    updateGaugeChart(selectedState);
}

// Function to filter stations based on the selected state
function filterStations(selectedState) {
// Clear existing station lists
    free_stations.length = 0;
    paid_stations.length = 0;

// Filter stations based on the selected state
    data.fuel_stations.forEach((station) => {
        if (station.state === selectedState) {
            const price = station.ev_pricing;
            if (price !== null && price === 'Free') {
                free_stations.push(station);
            } else if (price !== null && price !== 'Free') {
                paid_stations.push(station);
            }
        }
    
    });
// Update the pie chart with the filtered data
    buildPie();
}

function buildBarChart(selectedState, topFacilityTypes) {
// Check if topFacilityTypes is defined
    if (!topFacilityTypes) {
    console.error("Top facility types are not defined.");
    return;
    } 
// Filter stations based on the selected state and the top facility types
    const filteredStations = data.fuel_stations.filter((station) => station.state === selectedState && station.facility_type !== null && topFacilityTypes.some((item) => item.facilityType === station.facility_type));

// Count facility types
    const facilityTypeCounts = {};

    filteredStations.forEach((station) => {
        const facilityType = station.facility_type;
        if (facilityType in facilityTypeCounts) {
            facilityTypeCounts[facilityType]++;
        } else {
            facilityTypeCounts[facilityType] = 1;
        }
    });
// Convert facilityTypeCounts to an array of objects
const facilityTypeArray = Object.keys(facilityTypeCounts).map((facilityType) => ({
    facilityType,
    count: facilityTypeCounts[facilityType],
}));

// Sort the facility types by count in descending order
facilityTypeArray.sort((a, b) => a.count - b.count);

// Extract labels and values for the bar chart
const facilityTypes = facilityTypeArray.map((item) => item.facilityType);
const counts = facilityTypeArray.map((item) => item.count);

// Create data for the horizontal bar chart
const plotData = [{
    y: facilityTypes,
    x: counts,
    type: 'bar',
    orientation: 'h' // Set orientation to horizontal
}];

// Define layout options
const layout = {
    title: `Facility Types in ${selectedState}`,
    yaxis: {
        title: 'Facility Type',
        automargin: true // Automatically adjust the margin to fit labels
    },
    xaxis: {
        title: 'Count'
    }
};

// Create the horizontal bar chart using Plotly
Plotly.newPlot('bar-chart', plotData, layout);
}

// Function to find the top 10 facility types (change to synchronous)
function findTopFacilityTypes() {
    const facilityTypeCounts = {};

    data.fuel_stations.forEach((station) => {
        const facilityType = station.facility_type;
        if (facilityType) {
            if (facilityTypeCounts[facilityType]) {
                facilityTypeCounts[facilityType]++;
            } else {
                facilityTypeCounts[facilityType] = 1;
            }
        }
    });

    const facilityTypeArray = Object.keys(facilityTypeCounts).map((facilityType) => ({
        facilityType,
        count: facilityTypeCounts[facilityType],
    }));

    facilityTypeArray.sort((a, b) => b.count - a.count);

    return facilityTypeArray.slice(0, 10);
}
// Define an HTML element for the gauge chart
const gaugeChartElement = d3.select("#gauge");

// Function to build the gauge chart
function buildGaugeChart(totalStations) {
    // Create data for the gauge chart
    const plotData = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: totalStations,
        title: { text: "Total Stations" },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: { range: [0, Math.max(totalStations, 10)] }, // Adjust the range as needed
            steps: [
                { range: [0, totalStations], color: "lightgray" },
                { range: [0, totalStations], color: "green" } // Change the color as needed
            ],
            threshold: {
                line: { color: "red", width: 4 }, // Change the color and width as needed
                thickness: 0.75,
                value: totalStations
            }
        }
    }];

    var layout = {
        width: 400,
        height: 300,
        margin: { t: 0, b: 0 },
    };

    // Create the gauge chart using Plotly
    Plotly.newPlot('gauge', plotData, layout);
}

// Update the gauge chart with the total stations for the selected state
function updateGaugeChart(selectedState) {
    const totalStations = getTotalStations(selectedState); // Implement this function to calculate the total stations
    buildGaugeChart(totalStations);
}
// Function to calculate the total stations for the selected state
function getTotalStations(selectedState) {
    // Filter the data to include only stations in the selected state
    const filteredStations = data.fuel_stations.filter((station) => station.state === selectedState);

    // Get the count of filtered stations
    const totalStations = filteredStations.length;

    return totalStations;
}

// Initialize the page
init();



