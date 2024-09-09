import React, { useState } from 'react'
import { HourlyForecast, LeafletMap, SwiperSlider, WeatherDetails, WeatherSearch } from '../components'

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Weather = () => {
  const hourlyForecast = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1661871600,
        main: {
          temp: 296.76,
          feels_like: 296.98,
          temp_min: 296.76,
          temp_max: 297.87,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 933,
          humidity: 69,
          temp_kf: -1.11
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        clouds: {
          all: 100
        },
        wind: {
          speed: 0.62,
          deg: 349,
          gust: 1.18
        },
        visibility: 10000,
        pop: 0.32,
        rain: {
          h: 0.26
        },
        sys: {
          pod: "d"
        },
        dt_txt: "2022-08-30 15:00:00"
      },
      {
        dt: 1661871600,
        main: {
          temp: 296.76,
          feels_like: 296.98,
          temp_min: 296.76,
          temp_max: 297.87,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 933,
          humidity: 69,
          temp_kf: -1.11
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        clouds: {
          all: 100
        },
        wind: {
          speed: 0.62,
          deg: 349,
          gust: 1.18
        },
        visibility: 10000,
        pop: 0.32,
        rain: {
          h: 0.26
        },
        sys: {
          pod: "d"
        },
        dt_txt: "2022-08-30 15:00:00"
      },
      {
        dt: 1661871600,
        main: {
          temp: 296.76,
          feels_like: 296.98,
          temp_min: 296.76,
          temp_max: 297.87,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 933,
          humidity: 69,
          temp_kf: -1.11
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        clouds: {
          all: 100
        },
        wind: {
          speed: 0.62,
          deg: 349,
          gust: 1.18
        },
        visibility: 10000,
        pop: 0.32,
        rain: {
          h: 0.26
        },
        sys: {
          pod: "d"
        },
        dt_txt: "2022-08-30 15:00:00"
      },
      {
        dt: 1661871600,
        main: {
          temp: 296.76,
          feels_like: 296.98,
          temp_min: 296.76,
          temp_max: 297.87,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 933,
          humidity: 69,
          temp_kf: -1.11
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        clouds: {
          all: 100
        },
        wind: {
          speed: 0.62,
          deg: 349,
          gust: 1.18
        },
        visibility: 10000,
        pop: 0.32,
        rain: {
          h: 0.26
        },
        sys: {
          pod: "d"
        },
        dt_txt: "2022-08-30 15:00:00"
      },
      {
        dt: 1661871600,
        main: {
          temp: 296.76,
          feels_like: 296.98,
          temp_min: 296.76,
          temp_max: 297.87,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 933,
          humidity: 69,
          temp_kf: -1.11
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        clouds: {
          all: 100
        },
        wind: {
          speed: 0.62,
          deg: 349,
          gust: 1.18
        },
        visibility: 10000,
        pop: 0.32,
        rain: {
          h: 0.26
        },
        sys: {
          pod: "d"
        },
        dt_txt: "2022-08-30 15:00:00"
      },
      {
        dt: 1661882400,
        main: {
          temp: 295.45,
          feels_like: 295.59,
          temp_min: 292.84,
          temp_max: 295.45,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 931,
          humidity: 71,
          temp_kf: 2.61
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n"
          }
        ],
        clouds: {
          all: 96
        },
        wind: {
          speed: 1.97,
          deg: 157,
          gust: 3.39
        },
        visibility: 10000,
        pop: 0.33,
        rain: {
          h: 0.57
        },
        sys: {
          pod: "n"
        },
        dt_txt: "2022-08-30 18:00:00"
      },
      {
        dt: 1661893200,
        main: {
          temp: 292.46,
          feels_like: 292.54,
          temp_min: 290.31,
          temp_max: 292.46,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 931,
          humidity: 80,
          temp_kf: 2.15
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n"
          }
        ],
        clouds: {
          all: 68
        },
        wind: {
          speed: 2.66,
          deg: 210,
          gust: 3.58
        },
        visibility: 10000,
        pop: 0.7,
        rain: {
          h: 0.49
        },
        sys: {
          pod: "n"
        },
        dt_txt: "2022-08-30 21:00:00"
      },
      {
        dt: 1662292800,
        main: {
          temp: 294.93,
          feels_like: 294.83,
          temp_min: 294.93,
          temp_max: 294.93,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 935,
          humidity: 64,
          temp_kf: 0
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: {
          all: 88
        },
        wind: {
          speed: 1.14,
          deg: 17,
          gust: 1.57
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d"
        },
        dt_txt: "2022-09-04 12:00:00"
      }
    ],
    city: {
      id: 3163858,
      name: "Zocca",
      coord: {
        lat: 44.34,
        lon: 10.99
      },
      country: "IT",
      population: 4593,
      timezone: 7200,
      sunrise: 1661834187,
      sunset: 1661882248
    }
  }


  const [position, setPosition] = useState([21.468185, 83.975403]);
  return (
    <section className="w-full h-[93vh] p-4 grid grid-cols-2 gap-2 ">
      <div className="w-full h-full grid grid-rows-[50px_auto_50px] gap-2 ">
        {/* searchbox */}
        <div className=" ">
          <WeatherSearch />
        </div>
        {/* map */}
        <div className="h-full w-full relative shadowcss rounded-lg overflow-hidden ">
          <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={position} />
          </MapContainer>
        </div>
        {/* <LeafletMap /> */}
        {/* set alert */}
        <div className="flex items-center justify-end shadowcss rounded-lg px-2">
          <button className="bg-secondary  hover:bg-secondary/80 text-text1 font-semibold py-2 px-8 rounded">Set Alert</button>
        </div>
      </div>

      <div className="w-full h-full grid grid-rows-[auto_200px] gap-2  ">
        {/* details */}
        <WeatherDetails />
        {/* forecast */}
        <div className=" shadowcss rounded-lg relative overflow-hidden pt-2 grid grid-rows-[20px_auto] ">
          <h2 className='ml-2 font-semibold'>Hourly Forecast</h2>
          <div className="w-[50vw]">
            <HourlyForecast data={hourlyForecast.list} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Weather