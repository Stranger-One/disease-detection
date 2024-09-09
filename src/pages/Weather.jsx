import React, { useEffect, useState } from 'react'
import { HourlyForecast, LeafletMap, SwiperSlider, WeatherDetails, WeatherSearch } from '../components'

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';

const Weather = () => {
  const weatherData = useSelector(state => state.weather.data);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData])


  return (
    <section className="w-full h-[93vh] p-4 grid grid-cols-2 gap-2 ">
      <div className="w-full h-full grid grid-rows-[50px_auto_50px] gap-2 ">
        {/* searchbox */}
        <div className=" ">
          <WeatherSearch />
        </div>
        {/* map */}
        <div className="h-full w-full relative shadowcss rounded-lg overflow-hidden ">
          <LeafletMap />
        </div>
        {/* set alert */}
        <div className="flex items-center justify-end  rounded-lg px-2">
          <button className="bg-secondary  hover:bg-secondary/80 text-text1 font-semibold py-2 px-8 rounded">Set Alert</button>
        </div>
      </div>

      <div className="w-full h-full grid grid-rows-[auto_200px] gap-2  ">
        {/* details */}
        <WeatherDetails />
        {/* forecast */}
        <div className=" shadowcss rounded-lg relative overflow-hidden pt-2 grid grid-rows-[20px_auto] bg-slate-400">
          <h2 className='ml-2 font-semibold text-text1'>Hourly Forecast</h2>
          <div className="w-[50vw] ">
            <HourlyForecast />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Weather