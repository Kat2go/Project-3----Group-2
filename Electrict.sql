SELECT * FROM electric LIMIT 20;

DROP TABLE electric;

CREATE TABLE electric (
	ID  SERIAL PRIMARY KEY,
	Fuel_Type_Code VARCHAR,
	Station_Name VARCHAR,
	City VARCHAR,
	State VARCHAR,
    ZIP VARCHAR,
	Status_Code VARCHAR,
	Latitude decimal,
	Longitude decimal,
	Country VARCHAR,
	Facility_Type VARCHAR,
	EV_Pricing VARCHAR,
	EV_Workplace_Charging VARCHAR
)
SELECT * FROM electric WHERE STATE = '' LIMIT 25;

SELECT STATE,
COUNT(STATE)
FROM electric
GROUP BY STATE
ORDER BY STATE;

DELETE FROM electric WHERE STATE IN ('PR', 'BC', 'DC', 'KA');

