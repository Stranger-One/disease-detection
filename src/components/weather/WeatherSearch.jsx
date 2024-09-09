import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { BiLoaderCircle } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import axios from 'axios';
import conf from '../../conf/conf';
import getWeather from '../../data/getweather';
import { useDispatch, useSelector } from 'react-redux';
import { setWeather } from '../../store/weatherSlice';


const WeatherSearch = () => {
    const dispatch = useDispatch()
    const weatherData = useSelector(state => state.weather.data);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searchPlace, setSearchPlace] = useState({})
    const [suggestionBox, setsuggestionBox] = useState(false)

    const apiKey = conf.locationIqApiKey ;

    useEffect(()=>{
        if (weatherData) {
            setQuery(weatherData.name)
        }
    }, [weatherData])


    const fetchSuggestions = async (query) => {
        setLoading(true)
        const url = `https://us1.locationiq.com/v1/autocomplete.php?key=${apiKey}&q=${query}&limit=5&format=json`;

        try {
            const response = await axios.get(url);
            setSuggestions(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
        setLoading(false)
    };

    const handleSetPlace = (placeQuery) => {
        // console.log(placeQuery);
        setSearchPlace(placeQuery);
        setQuery(placeQuery.display_name)
        setsuggestionBox(false)
        // getweather()
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if(value.length >= 2){
            setsuggestionBox(true)
        } else {
            setsuggestionBox(false)
        }

        if (value.length >= 2 && value.length % 2 == 0) {
            fetchSuggestions(value);
        } 
    };

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        // console.log(searchPlace);

        const weatherData = await getWeather(searchPlace.lat, searchPlace.lon)
        if(weatherData){
            dispatch(setWeather(weatherData))
        }

        setLoading(false)
    };



    return (
        <form onSubmit={handleSubmit} className=' h-fit w-full flex relative justify-center'>
            <div className="w-full h-[40px] bg-transparent grid grid-cols-[auto_100px] rounded-lg overflow-hidden border-[1px] border-zinc-800 text-zinc-800">
                <input type="search" className="w-full h-full bg-transparent outline-none px-4 text-lg placeholder:text-zinc-800 " placeholder="Search..." value={query} onChange={(e) => handleChange(e)} />
                <button type='submit' className='bg-secondary w-full h-full  flex justify-center items-center group'>
                    {loading ? <BiLoaderCircle className='animate-spin text-2xl text-text1' /> : <IoSearch className='text-2xl text-text1 group-hover:text-text2' />}
                </button>
            </div>
            <div className={`suggestionBox absolute top-16 bg-background/70 backdrop-blur-sm px-2 rounded-lg  border-[1px] border-text1 w-full max-h-[400px] overflow-auto z-[10000] ${suggestionBox ? '' : 'hidden'}  `}>
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