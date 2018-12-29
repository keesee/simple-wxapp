////////////////////////////////////////////////////////////
// WEATHER API (https://openweathermap.org/current) ////////
////////////////////////////////////////////////////////////

// Request (London) /////////////////////////////////////////////////////////////////////////////////
// http://api.openweathermap.org/data/2.5/weather?APPID=36c003ef23594c56c99f7ddaa57fb384&q=London,uk
/////////////////////////////////////////////////////////////////////////////////////////////////////

const data = {
    "coord": {
      "lon": -0.13,
      "lat": 51.51
    },
    "weather": [
      {
        "id": 721,
        "main": "Haze",
        "description": "haze",
        "icon": "50n"
      },
      {
        "id": 701,
        "main": "Mist",
        "description": "mist",
        "icon": "50n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 280.51,
      "pressure": 1013,
      "humidity": 93,
      "temp_min": 279.15,
      "temp_max": 282.15
    },
    "visibility": 6000,
    "wind": {
      "speed": 3.1,
      "deg": 100
    },
    "clouds": {
      "all": 90
    },
    "dt": 1542991800,
    "sys": {
      "type": 1,
      "id": 5091,
      "message": 0.0537,
      "country": "GB",
      "sunrise": 1542958367,
      "sunset": 1542988857
    },
    "id": 2643743,
    "name": "London",
    "cod": 200
  }
