# Project-3----Group-2
OVERVIEW
For this project, team members Juliet Hamilton, Triston Cavaness, Katrina Brown and Lesley Conn developed an interactive dashboard to provide data analysis of electric car charging stations nationwide. Data developed mapped the number of stations by state, ranked the states by highest number of stations and provided another interactive pie chart to show, by state, the percentage of stations that offer free charging versus paid and the types of facilities where stations are located.
The U.S. Department of Energy's National Renewable Energy Lab's Alternative Fuels Data Center offers JSON and CSV files used to help analyze the data in PostGreSQL/PgAdmin 4 and build JavaScript visualizations. Initial data returned more than 77,000 unique records that included eight types of alternative fuel stations, including biodiesel, ethanol and hydrogen. Data was narrowed exclusively to electric charging, returning approximately 55,000 unique records.
Team members worked during class and in outside sessions using Slack, Slack huddles and Zoom sessions to develop various coding requirements that were then pushed and pulled through the team's GitHub repository.
Using the refined data, both JSON and SQL, the next step involved developing a Python-powered API Flask to host HTLM/CSS files. The team used a new JavaScript library, datamaps.github.io, to map and display the data by state in clear, digestible format that provided an engaging user experience.
ABOUT THE CODING
Here's an overview of what the JSON code does:

1. **API Request and Data Processing**:
   - It makes an asynchronous API request to the NREL API using the `d3.json()` method and stores the retrieved data in the `data` variable.

2. **Data Filtering and Categorization**:
   - The code processes the data to categorize fuel stations into two categories: "Free" and "Paid" based on the pricing information.

3. **Dropdown Population**:
   - It populates a dropdown menu (`<select>`) with a list of U.S. states based on the unique states available in the data.

4. **Pie Chart Creation**:
   - It creates a pie chart using Plotly to visualize the number of "Free" and "Paid" fuel stations.

5. **Dropdown Event Handling**:
   - It defines an event handler (`optionChanged`) that is triggered when the user selects a state from the dropdown. This handler updates the charts and data based on the selected state.

6. **Bar Chart Creation**:
   - It creates a horizontal bar chart using Plotly to visualize the facility types of fuel stations in the selected state.

7. **Gauge Chart Creation**:
   - It creates a gauge chart using Plotly to visualize the total number of fuel stations in the selected state.

8. **Functions for Data Manipulation**:
   - It defines several functions (`getUniqueStates`, `filterStations`, `buildGaugeChart`, `updateGaugeChart`, and `getTotalStations`) to perform data manipulation and chart creation.

9. **Initialization**:
   - It initializes the web page by calling the `init()` function, which fetches data, sets up charts and event handling, and populates the dropdown.

MAP


This code is responsible for retrieving data from a specific API, processing that data, and creating a map visualization based on the processed data. Here's a high-level summary of what the code does:

1. Define the API URL:
   - The code begins by defining the URL for an API that provides data related to alternative fuel stations in the United States (electric vehicle charging stations, in this case). The API URL includes an API key and specifies that the fuel type is electric (ELEC) and the country is the United States (US).

2. Load GeoJSON data using D3:
   - The code uses the D3 library to make an asynchronous HTTP request to the specified API URL and loads the GeoJSON data. It also handles errors in case the data retrieval fails.

3. Process and analyze the data:
   - The code initializes a JavaScript object called `stateChargerCounts` to store the count of electric vehicle chargers for each U.S. state.
   - It then loops through the features in the GeoJSON data and extracts the state abbreviation from the properties of each feature. It increments the charger count for each state in the `stateChargerCounts` object.
   - Next, it creates an array of state objects with total charger counts and sorts them in descending order based on the charger count.
   - It filters out unwanted states (e.g., "BC" and "PR") and extracts sorted state abbreviations into the `sortedStates` array.
   - It defines rank ranges and assigns fill keys to states based on their rank within these ranges. The processed data is stored in the `stateChargerData` object.

4. Display data on a map:
   - The code uses the Datamap library to create a map visualization of the United States.
   - It specifies map configuration settings, such as the map projection and the HTML element where the map should be displayed.
   - It defines the appearance of the map, including the colors for different fill keys (ranks) and the content to be displayed in pop-up tooltips.
   - Finally, it passes the processed `stateChargerData` to the Datamap and displays the map with charger data and ranks for each state.

5. Log state abbreviations and fill keys:
   - The code logs the state abbreviations and their corresponding fill keys to the console. This step is for debugging or informational purposes.
More than three interactive data visualizations were presented and additional data visualizations were developed through PgAdmin. Additionally, to best organize talking points and ensure that all team members participated in the presentation, team members developed a PowerPoint presentation. The presentation provided global and national information on the size of the current charging stations, growth forecasts into 2030, and a chart showing Tesla's growth over the last decade.
Project 3 required team members to draw across a number of skills, including Python, SQL, JavaScript and HTML taught during class. Throughout our project development class sessions, instructor Steven Green and teaching assistant Carlos Fernandez offered additional recommendations and assisted when team members encountered errors in SQL file uploading and Flask.
