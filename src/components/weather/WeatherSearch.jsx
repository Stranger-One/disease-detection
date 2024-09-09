import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { BiLoaderCircle } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import axios from 'axios';

const WeatherSearch = () => {
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [place, setPlace] = useState({})
    const [suggestionBox, setsuggestionBox] = useState(false)

    const apiKey = "pk.4030f71cf955428548a422d4845c838e";
    const openWeatherApiKey = '3156b60f5e12d2762cea0ca85bdd104d'

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //             const { latitude, longitude } = position.coords;
    //             getweather(latitude, longitude);
    //             console.log(latitude, longitude);
    //         },
    //         (error) => {
    //             setError("Unable to retrieve your location");
    //             setLoading(false);
    //         }
    //     );
    //     setLoading(false)
    // }, [])

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length >= 3) {
            fetchSuggestions(value);
            setsuggestionBox(true)
        } else {
            setsuggestionBox(false)
        }
    };

    const fetchSuggestions = async (input) => {
        setLoading(true)
        const url = `https://us1.locationiq.com/v1/autocomplete.php?key=${apiKey}&q=${input}&limit=5&format=json`;

        try {
            const response = await axios.get(url);
            setSuggestions(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
        setLoading(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        getweather()
    };

    const handleSetPlace = (place) => {
        // console.log(place);
        setPlace(place);
        setQuery(place.display_name)
        setsuggestionBox(false)
        getweather()
    };

    const getweather = async (lat, lon) => {
        setLoading(true)
        console.log("gettiong weather data ...");
        console.log(place);


        // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${place.lat}&lon=${place.lon}&exclude=hourly,daily&appid=${openWeatherApiKey}`

        // Call current weather data - free
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherApiKey}`

        // Call hourly forecast data - paid
        // const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${place.lat}&lon=${place.lon}&appid=${openWeatherApiKey}`

        // 5 day weather forecast - free
        // const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${place.lat}&lon=${place.lon}&appid=${openWeatherApiKey}`

        // Current air pollution data - free
        // const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${place.lat}&lon=${place.lon}&appid=${openWeatherApiKey}`

        // Forecast air pollution data - free
        // const url = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${place.lat}&lon=${place.lon}&appid=${openWeatherApiKey}`

        // Historical air pollution data - free
        // const start = '1606488670'
        // const end = '1606747870'
        // const url = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${place.lat}&lon=${place.lon}&start=${start}&end=${end}&appid=${openWeatherApiKey}`

        // const date = '2024-08-05'  // `YYYY-MM-DD`
        // const url = `https://api.openweathermap.org/energy/1.0/solar/data?lat=${place.lat}&lon=${place.lon}&date=${date}&appid=${openWeatherApiKey}`


        try {
            const response = await axios.get(url)
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setLoading(false)
        }
        setLoading(false)
    };

    return (
        <form onSubmit={handleSubmit} className=' h-fit w-full flex relative justify-center'>
            <div className="w-full h-[50px] bg-transparent grid grid-cols-[auto_100px] rounded-lg overflow-hidden border-[1px] border-zinc-800 text-zinc-800">
                <input type="search" className="w-full h-full bg-transparent outline-none px-10 text-lg placeholder:text-zinc-800 " placeholder="Search..." value={query} onChange={(e) => handleChange(e)} />
                <button type='submit' className='w-full h-full  flex justify-center items-center group'>
                    {loading ? <BiLoaderCircle className='animate-spin text-2xl text-text1' /> : <IoSearch className='text-2xl text-text1 group-hover:text-text2' />}
                </button>
            </div>
            <div className={`suggestionBox absolute top-16 bg-background/70 backdrop-blur-sm px-2 rounded-lg  border-[1px] border-text1 w-full max-h-[400px] overflow-auto z-20 ${suggestionBox ? '' : 'hidden'}  `}>
                <ul>
                    {suggestions.length > 0 && suggestions.map((sugg, index) => (
                        <li key={index} onClick={() => handleSetPlace(sugg)} className='text-text1 py-1 my-2 rounded-lg bg-transparent flex items-center gap-2 px-2 text-lg border-text1 border-[1px] cursor-pointer hover:bg-zinc-400 hover:text-text1  '> <span><IoLocationOutline className='text-xl' /></span> {sugg.display_name}</li>
                    ))}
                </ul>
            </div>
        </form>
    )
}

export default WeatherSearch