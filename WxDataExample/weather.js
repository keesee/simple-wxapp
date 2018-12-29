////////////////////////////////////////////////////////////
// FORECAST API (https://openweathermap.org/forecast5) /////
////////////////////////////////////////////////////////////

// Request (Chengdu) ////////////////////////////////////////////////////////////////////////////////
// http://api.openweathermap.org/data/2.5/forecast?APPID=36c003ef23594c56c99f7ddaa57fb384&q=chengdu
/////////////////////////////////////////////////////////////////////////////////////////////////////

const data = {
    "cod": "200",
    "message": 0.0058,
    "cnt": 40,
    "list": [
      {
        "dt": 1542996000,
        "main": {
          "temp": 281.43,
          "temp_min": 279.101,
          "temp_max": 281.43,
          "pressure": 973.44,
          "sea_level": 1035.9,
          "grnd_level": 973.44,
          "humidity": 93,
          "temp_kf": 2.33
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.27,
          "deg": 269.505
        },
        "rain": {
          "3h": 0.0050000000000001
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-23 18:00:00"
      },
      {
        "dt": 1543006800,
        "main": {
          "temp": 279.36,
          "temp_min": 277.61,
          "temp_max": 279.36,
          "pressure": 974.05,
          "sea_level": 1036.72,
          "grnd_level": 974.05,
          "humidity": 87,
          "temp_kf": 1.75
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.43,
          "deg": 273.504
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-23 21:00:00"
      },
      {
        "dt": 1543017600,
        "main": {
          "temp": 277.79,
          "temp_min": 276.629,
          "temp_max": 277.79,
          "pressure": 976.27,
          "sea_level": 1039.24,
          "grnd_level": 976.27,
          "humidity": 84,
          "temp_kf": 1.17
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 0.91,
          "deg": 291.004
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-24 00:00:00"
      },
      {
        "dt": 1543028400,
        "main": {
          "temp": 285.74,
          "temp_min": 285.153,
          "temp_max": 285.74,
          "pressure": 978.26,
          "sea_level": 1039.86,
          "grnd_level": 978.26,
          "humidity": 96,
          "temp_kf": 0.58
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 1.79,
          "deg": 229.001
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-24 03:00:00"
      },
      {
        "dt": 1543039200,
        "main": {
          "temp": 288.539,
          "temp_min": 288.539,
          "temp_max": 288.539,
          "pressure": 976.3,
          "sea_level": 1037.08,
          "grnd_level": 976.3,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 36
        },
        "wind": {
          "speed": 1.67,
          "deg": 167.005
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-24 06:00:00"
      },
      {
        "dt": 1543050000,
        "main": {
          "temp": 288.053,
          "temp_min": 288.053,
          "temp_max": 288.053,
          "pressure": 976.37,
          "sea_level": 1037.28,
          "grnd_level": 976.37,
          "humidity": 74,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 1.07,
          "deg": 66.5007
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-24 09:00:00"
      },
      {
        "dt": 1543060800,
        "main": {
          "temp": 282.808,
          "temp_min": 282.808,
          "temp_max": 282.808,
          "pressure": 977.98,
          "sea_level": 1040.21,
          "grnd_level": 977.98,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 20
        },
        "wind": {
          "speed": 0.87,
          "deg": 90.0001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-24 12:00:00"
      },
      {
        "dt": 1543071600,
        "main": {
          "temp": 279.739,
          "temp_min": 279.739,
          "temp_max": 279.739,
          "pressure": 978.97,
          "sea_level": 1041.83,
          "grnd_level": 978.97,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.16,
          "deg": 208
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-24 15:00:00"
      },
      {
        "dt": 1543082400,
        "main": {
          "temp": 278.294,
          "temp_min": 278.294,
          "temp_max": 278.294,
          "pressure": 977.98,
          "sea_level": 1041.19,
          "grnd_level": 977.98,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 1.31,
          "deg": 221.01
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-24 18:00:00"
      },
      {
        "dt": 1543093200,
        "main": {
          "temp": 277.346,
          "temp_min": 277.346,
          "temp_max": 277.346,
          "pressure": 976.75,
          "sea_level": 1040.21,
          "grnd_level": 976.75,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 1.22,
          "deg": 191.512
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-24 21:00:00"
      },
      {
        "dt": 1543104000,
        "main": {
          "temp": 276.566,
          "temp_min": 276.566,
          "temp_max": 276.566,
          "pressure": 976.87,
          "sea_level": 1040.48,
          "grnd_level": 976.87,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.21,
          "deg": 210.008
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-25 00:00:00"
      },
      {
        "dt": 1543114800,
        "main": {
          "temp": 285.876,
          "temp_min": 285.876,
          "temp_max": 285.876,
          "pressure": 977.23,
          "sea_level": 1038.61,
          "grnd_level": 977.23,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.63,
          "deg": 191.001
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-25 03:00:00"
      },
      {
        "dt": 1543125600,
        "main": {
          "temp": 288.958,
          "temp_min": 288.958,
          "temp_max": 288.958,
          "pressure": 973.85,
          "sea_level": 1034.11,
          "grnd_level": 973.85,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.91,
          "deg": 173
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-25 06:00:00"
      },
      {
        "dt": 1543136400,
        "main": {
          "temp": 288.571,
          "temp_min": 288.571,
          "temp_max": 288.571,
          "pressure": 972.54,
          "sea_level": 1032.97,
          "grnd_level": 972.54,
          "humidity": 73,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.51,
          "deg": 108.502
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-25 09:00:00"
      },
      {
        "dt": 1543147200,
        "main": {
          "temp": 283.275,
          "temp_min": 283.275,
          "temp_max": 283.275,
          "pressure": 973.9,
          "sea_level": 1035.97,
          "grnd_level": 973.9,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 44
        },
        "wind": {
          "speed": 1.3,
          "deg": 11.0051
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-25 12:00:00"
      },
      {
        "dt": 1543158000,
        "main": {
          "temp": 281.904,
          "temp_min": 281.904,
          "temp_max": 281.904,
          "pressure": 974.35,
          "sea_level": 1037.14,
          "grnd_level": 974.35,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 1.12,
          "deg": 22.503
        },
        "rain": {
          "3h": 0.015
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-25 15:00:00"
      },
      {
        "dt": 1543168800,
        "main": {
          "temp": 281.692,
          "temp_min": 281.692,
          "temp_max": 281.692,
          "pressure": 974.39,
          "sea_level": 1037.46,
          "grnd_level": 974.39,
          "humidity": 93,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 1.26,
          "deg": 67.5015
        },
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-25 18:00:00"
      },
      {
        "dt": 1543179600,
        "main": {
          "temp": 280.915,
          "temp_min": 280.915,
          "temp_max": 280.915,
          "pressure": 974.02,
          "sea_level": 1037.31,
          "grnd_level": 974.02,
          "humidity": 97,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 1.16,
          "deg": 22.0033
        },
        "rain": {
          "3h": 0.2
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-25 21:00:00"
      },
      {
        "dt": 1543190400,
        "main": {
          "temp": 280.762,
          "temp_min": 280.762,
          "temp_max": 280.762,
          "pressure": 976.2,
          "sea_level": 1039.71,
          "grnd_level": 976.2,
          "humidity": 95,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 1.57,
          "deg": 37.5004
        },
        "rain": {
          "3h": 0.49
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-26 00:00:00"
      },
      {
        "dt": 1543201200,
        "main": {
          "temp": 283.285,
          "temp_min": 283.285,
          "temp_max": 283.285,
          "pressure": 979.43,
          "sea_level": 1041.06,
          "grnd_level": 979.43,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 2.35,
          "deg": 49.001
        },
        "rain": {
          "3h": 1
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-26 03:00:00"
      },
      {
        "dt": 1543212000,
        "main": {
          "temp": 284.723,
          "temp_min": 284.723,
          "temp_max": 284.723,
          "pressure": 977.73,
          "sea_level": 1038.28,
          "grnd_level": 977.73,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 2.04,
          "deg": 356.5
        },
        "rain": {
          "3h": 0.85
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-26 06:00:00"
      },
      {
        "dt": 1543222800,
        "main": {
          "temp": 285.473,
          "temp_min": 285.473,
          "temp_max": 285.473,
          "pressure": 975.93,
          "sea_level": 1036.63,
          "grnd_level": 975.93,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 56
        },
        "wind": {
          "speed": 1.67,
          "deg": 290.002
        },
        "rain": {
          "3h": 0.05
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-26 09:00:00"
      },
      {
        "dt": 1543233600,
        "main": {
          "temp": 282.454,
          "temp_min": 282.454,
          "temp_max": 282.454,
          "pressure": 976.7,
          "sea_level": 1038.71,
          "grnd_level": 976.7,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 1.61,
          "deg": 270.006
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-26 12:00:00"
      },
      {
        "dt": 1543244400,
        "main": {
          "temp": 281.09,
          "temp_min": 281.09,
          "temp_max": 281.09,
          "pressure": 976.99,
          "sea_level": 1039.67,
          "grnd_level": 976.99,
          "humidity": 93,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 1.41,
          "deg": 256.502
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-26 15:00:00"
      },
      {
        "dt": 1543255200,
        "main": {
          "temp": 279.58,
          "temp_min": 279.58,
          "temp_max": 279.58,
          "pressure": 976.74,
          "sea_level": 1039.54,
          "grnd_level": 976.74,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 48
        },
        "wind": {
          "speed": 1.21,
          "deg": 265.004
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-26 18:00:00"
      },
      {
        "dt": 1543266000,
        "main": {
          "temp": 279.713,
          "temp_min": 279.713,
          "temp_max": 279.713,
          "pressure": 976.32,
          "sea_level": 1039.25,
          "grnd_level": 976.32,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 1.17,
          "deg": 295
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-26 21:00:00"
      },
      {
        "dt": 1543276800,
        "main": {
          "temp": 279.395,
          "temp_min": 279.395,
          "temp_max": 279.395,
          "pressure": 977.96,
          "sea_level": 1041.21,
          "grnd_level": 977.96,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 20
        },
        "wind": {
          "speed": 0.71,
          "deg": 43.0001
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-27 00:00:00"
      },
      {
        "dt": 1543287600,
        "main": {
          "temp": 285.729,
          "temp_min": 285.729,
          "temp_max": 285.729,
          "pressure": 979.45,
          "sea_level": 1041.15,
          "grnd_level": 979.45,
          "humidity": 92,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.97,
          "deg": 91.5027
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-27 03:00:00"
      },
      {
        "dt": 1543298400,
        "main": {
          "temp": 287.586,
          "temp_min": 287.586,
          "temp_max": 287.586,
          "pressure": 977.2,
          "sea_level": 1037.82,
          "grnd_level": 977.2,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.8,
          "deg": 97.0046
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-27 06:00:00"
      },
      {
        "dt": 1543309200,
        "main": {
          "temp": 287.299,
          "temp_min": 287.299,
          "temp_max": 287.299,
          "pressure": 975.86,
          "sea_level": 1036.54,
          "grnd_level": 975.86,
          "humidity": 72,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 0.61,
          "deg": 64.0032
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-27 09:00:00"
      },
      {
        "dt": 1543320000,
        "main": {
          "temp": 281.461,
          "temp_min": 281.461,
          "temp_max": 281.461,
          "pressure": 976.1,
          "sea_level": 1038.23,
          "grnd_level": 976.1,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 0.25,
          "deg": 343.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-27 12:00:00"
      },
      {
        "dt": 1543330800,
        "main": {
          "temp": 278.963,
          "temp_min": 278.963,
          "temp_max": 278.963,
          "pressure": 975.77,
          "sea_level": 1038.53,
          "grnd_level": 975.77,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 24
        },
        "wind": {
          "speed": 1.31,
          "deg": 340.004
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-27 15:00:00"
      },
      {
        "dt": 1543341600,
        "main": {
          "temp": 280.198,
          "temp_min": 280.198,
          "temp_max": 280.198,
          "pressure": 974.27,
          "sea_level": 1037.18,
          "grnd_level": 974.27,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 1.82,
          "deg": 11.5002
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-27 18:00:00"
      },
      {
        "dt": 1543352400,
        "main": {
          "temp": 280.722,
          "temp_min": 280.722,
          "temp_max": 280.722,
          "pressure": 973.04,
          "sea_level": 1036.05,
          "grnd_level": 973.04,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 2.11,
          "deg": 39.5014
        },
        "rain": {
          "3h": 0.02
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-27 21:00:00"
      },
      {
        "dt": 1543363200,
        "main": {
          "temp": 280.969,
          "temp_min": 280.969,
          "temp_max": 280.969,
          "pressure": 973.81,
          "sea_level": 1036.9,
          "grnd_level": 973.81,
          "humidity": 94,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 1.77,
          "deg": 357.501
        },
        "rain": {
          "3h": 0.15
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-28 00:00:00"
      },
      {
        "dt": 1543374000,
        "main": {
          "temp": 283.404,
          "temp_min": 283.404,
          "temp_max": 283.404,
          "pressure": 974.65,
          "sea_level": 1035.85,
          "grnd_level": 974.65,
          "humidity": 93,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 1.86,
          "deg": 342.506
        },
        "rain": {
          "3h": 0.44
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-28 03:00:00"
      },
      {
        "dt": 1543384800,
        "main": {
          "temp": 285.184,
          "temp_min": 285.184,
          "temp_max": 285.184,
          "pressure": 971.73,
          "sea_level": 1031.89,
          "grnd_level": 971.73,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 48
        },
        "wind": {
          "speed": 0.36,
          "deg": 95
        },
        "rain": {
          "3h": 0.18
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-28 06:00:00"
      },
      {
        "dt": 1543395600,
        "main": {
          "temp": 285.871,
          "temp_min": 285.871,
          "temp_max": 285.871,
          "pressure": 970.74,
          "sea_level": 1030.89,
          "grnd_level": 970.74,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 1.07,
          "deg": 96.5032
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-11-28 09:00:00"
      },
      {
        "dt": 1543406400,
        "main": {
          "temp": 282.646,
          "temp_min": 282.646,
          "temp_max": 282.646,
          "pressure": 973.58,
          "sea_level": 1035.25,
          "grnd_level": 973.58,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 1.61,
          "deg": 18.0043
        },
        "rain": {
          "3h": 0.02
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-28 12:00:00"
      },
      {
        "dt": 1543417200,
        "main": {
          "temp": 282.283,
          "temp_min": 282.283,
          "temp_max": 282.283,
          "pressure": 975.63,
          "sea_level": 1038.16,
          "grnd_level": 975.63,
          "humidity": 95,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 1.83,
          "deg": 10.5003
        },
        "rain": {
          "3h": 0.12
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-11-28 15:00:00"
      }
    ],
    "city": {
      "id": 1815286,
      "name": "Chengdu",
      "coord": {
        "lat": 30.6766,
        "lon": 104.0613
      },
      "country": "CN",
      "population": 3950437
    }
  }