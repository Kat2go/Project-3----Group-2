// Create a DataMap container
var chargers = new Datamap({
  scope: 'usa',
  element: document.getElementById('container'),
  geographyConfig: {
    highlightBorderColor: '#bada55',
    popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name + '<br>Rank: ' + data.rank + '</div>';
    },
    highlightBorderWidth: 3,
  },

  fills: {
  '1': '#CC4731',
  '2': '#306596',
  '3': '#667FAF',
  '4': '#A9C0DE',
  '5': '#CA5E5B',
  '6': '#EAA9A8',
  defaultFill: '#EDDC4E'
},
data:{
  "CA": {
      
      "rank": 1,
      "fillKey": 1
  },
  "NY": {
      
      "rank": 2,
      "fillKey": 1
  },
  "FL": {
      
      "rank": 3,
      "fillKey": 1
  },
  "TX": {
      
      "rank": 4,
      "fillKey": 1
  },
  "MA": {
      
      "rank": 5,
      "fillKey": 1
  },
  "WA": {
      
      "rank": 6,
      "fillKey": 1
  },
  "CO": {
      
      "rank": 7,
      "fillKey": 2
  },
  "GA": {
      
      "rank": 8,
      "fillKey": 2
  },
  "MD": {
      
      "rank": 9,
      "fillKey": 2
  },
  "PA": {
      
      "rank": 10,
      "fillKey": 2
  },
  "VA": {
      
      "rank": 11,
      "fillKey": 2
  },
  "OH": {
      
      "rank": 12,
      "fillKey": 2
  },
  "NC": {
      
      "rank": 13,
      "fillKey": 3
  },
  "MI": {
      
      "rank": 14,
      "fillKey": 3
  },
  "IL": {
      
      "rank": 15,
      "fillKey": 3
  },
  "NJ": {
      
      "rank": 16,
      "fillKey": 3
  },
  "MO": {
      
      "rank": 17,
      "fillKey": 3
  },
  "OR": {
      
      "rank": 18,
      "fillKey": 3
  },
  "AZ": {
      
      "rank": 19,
      "fillKey": 4
  },
  "UT": {
      
      "rank": 20,
      "fillKey": 4
  },
  "TN": {
      
      "rank": 21,
      "fillKey": 4
  },
  "CT": {
      
      "rank": 22,
      "fillKey": 4
  },
  "MN": {
      
      "rank": 23,
      "fillKey": 4
  },
  "NV": {
      
      "rank": 24,
      "fillKey": 4
  },
  "WI": {
      
      "rank": 25,
      "fillKey": 5
  },
  "KS": {
      
      "rank": 26,
      "fillKey": 5
  },
  "SC": {
      
      "rank": 27,
      "fillKey": 5
  },
  "IN": {
      
      "rank": 28,
      "fillKey": 5
  },
  "ME": {
      
      "rank": 29,
      "fillKey": 5
  },
  "HI": {
      
      "rank": 30,
      "fillKey": 5
  },
  "AL": {
      
      "rank": 31,
      "fillKey": 6
  },
  "VT": {
      
      "rank": 32,
      "fillKey": 6
  },
  "DC": {
      
      "rank": 33,
      "fillKey": 6
  },
  "OK": {
      
      "rank": 34,
      "fillKey": 6
  },
  "IA": {
      
      "rank": 35,
      "fillKey": 6
  },
  "RI": {
      
      "rank": 36,
      "fillKey": 6
  },
  "AR": {
      
      "rank": 37,
      "fillKey": 7
  },
  "KY": {
      
      "rank": 38,
      "fillKey": 7
  },
  "NM": {
      
      "rank": 39,
      "fillKey": 7
  },
  "LA": {
      
      "rank": 40,
      "fillKey": 7
  },
  "NE": {
      
      "rank": 41,
      "fillKey": 7
  },
  "NH": {
      
      "rank": 42,
      "fillKey": 7
  },
  "DE": {
      
      "rank": 43,
      "fillKey": 8
  },
  "ID": {
      
      "rank": 44,
      "fillKey": 8
  },
  "MS": {
      
      "rank": 45,
      "fillKey": 8
  },
  "WV": {
      
      "rank": 46,
      "fillKey": 8
  },
  "MT": {
      
      "rank": 47,
      "fillKey": 8
  },
  "WY": {
      
      "rank": 48,
      "fillKey": 8
  },
  "ND": {
      
      "rank": 49,
      "fillKey": 9
  },
  "SD": {
      
      "rank": 50,
      "fillKey": 9
  },
  "AK": {
      
      "rank": 51,
      "fillKey": 9
  },
  "PR": {
      
      "rank": 52,
      "fillKey": 9
  },
 
  "KA": {
      
      "rank": 54,
      "fillKey": 9
  },
  "BC": {
      
      "rank": 55,
      "fillKey": 10
  }
}
});
chargers.labels();