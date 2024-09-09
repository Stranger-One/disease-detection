import React, { useEffect, useState } from 'react'
import * as L from "leaflet"
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux';
import { BiLoaderCircle } from "react-icons/bi";
import { LuNavigation2 } from "react-icons/lu";
import getWeather from '../../data/getweather';
import { setWeather } from '../../store/weatherSlice';



const MapWithCentering = ({ coords }) => {
    const map = useMap();

    useEffect(() => {
        if (coords) {
            map.flyTo([coords.lat, coords.lon], 10);  // Recenter map when coordinates change
        }
    }, [coords, map]);

    return <Marker position={[coords.lat, coords.lon]} />;
};


const LocateButton = () => {
    const map = useMap();
    const dispatch = useDispatch()

    const locateUser = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                getWeather(latitude, longitude).then(resp => {
                    dispatch(setWeather(resp))
                })
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    return (
        <button onClick={locateUser} className='absolute top-20 left-3 z-[1000] bg-white border-[1px] border-black p-1 '>
            <LuNavigation2 className='text-xl' />
        </button>
    );
};

const LeafletMap = () => {
    const weatherData = useSelector(state => state.weather.data);
    // console.log(weatherData);


    return (weatherData ?
        <MapContainer center={[weatherData.coord.lat, weatherData.coord.lon]} zoom={10} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            <MapWithCentering coords={weatherData.coord} />
            <LocateButton />
        </MapContainer>
        : <div className="w-full h-full flex items-center justify-center">
            <BiLoaderCircle className='animate-spin text-4xl text-text1' />
        </div>
    )
}

export default LeafletMap