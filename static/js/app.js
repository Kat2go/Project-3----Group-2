// Define the URL for your JSON data
const url = "https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=200&api_key=NFwYdHUM4ZpItnrfWegNs0sBSvdUplNebaTPO3RZ&fuel_type_code=ELECTRIC";

let data;

// Function to initialize the page
function init() {
    // Populate the dropdown menu with sample IDs
    d3.json(url).then((jsonDatadata) => {
        data = jsonDatadata; // Store the JSON data as a variable
        console.log(data.fuel_stations); 
        
       /*  let dropdown = d3.select("#selDataset");
        // Add options to the dropdown menu
        data.fuel_stations.facility_type.forEach((type) => {
            dropdown.append("option").text(type).property("value", type);
        }); */

       /*  // Use the first sample ID to build the initial plots
        let firstSample = data.fuel_stations[0];
        buildPlots(firstSample);
        buildBubbleChart(firstSample);
        displaySampleMetadata(firstSample);
        buildGaugeChart(firstSample); */
    });
}
for (var i = 0; i < stations.length; i++) {
    var price = stations[i].ev_pricing;
    if (price !== "NULL") {
        // Do something with the non-NULL price here
        // For example, you can log it to the console
        console.log("Price is not NULL:", price);
    }
}
// Initialize the page
init();
