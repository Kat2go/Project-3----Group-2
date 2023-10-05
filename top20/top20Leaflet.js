
// Store our API endpoint as url
const url = "https://developer.nrel.gov/api/alt-fuel-stations/v1.geojson?&api_key=NFwYdHUM4ZpItnrfWegNs0sBSvdUplNebaTPO3RZ&limit=10&fuel_type=ELEC&country=US";

// Create a Leaflet map object
var myMap = L.map("map", {
  center: [40, -98],
  zoom: 5,
}); 

//top 20 by zip code
top_20 = ['92618', '93446', '32819', '92101', '94574', '96815', '92262', '78758', '95054', '95448', '96753', '94025', '33701', '30339', '12866', '95616', '10019', '89109', '43215', '29201']
//open date, fuel type

// Add a basemap layer
var streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

function isInTop20(zipCode) {
  return top_20.includes(zipCode);
}

// Load GeoJSON data and create markers with varying sizes based on depth
d3.json(url).then(function (data) {
  console.log(data); // Log data here

  L.geoJson(data, {
      pointToLayer: function (feature, latlng) {
        const city = feature.properties.city;
        const state = feature.properties.state;
        const type = feature.properties.fuel_type_code;
        const open_date = feature.properties.open_date;
        const zipCode = feature.properties.zip;
        
        if (!isInTop20(zipCode)) {
            // Zip code is not in the top 20, so don't create a marker for it
            return null;
        }

        const marker = L.circleMarker(latlng);

        // Bind a popup with city, fuel type, and facility information
        marker.bindPopup(`<h3>${city}, ${state}</h3><hr><p>Fuel Type: ${type}</p><p>Open Date: ${open_date} </p>`);

        return marker;
    }
}).addTo(myMap);

})

