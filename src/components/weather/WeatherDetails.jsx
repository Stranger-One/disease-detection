import React from 'react'
import { FaTemperatureLow } from "react-icons/fa6";
import { WiDegrees } from "react-icons/wi";
import { IoMdSunny } from "react-icons/io";
import { TbDroplets } from "react-icons/tb";
import { FaSkyatlas } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { GiWindSlap } from "react-icons/gi";
import { LuNavigation2 } from "react-icons/lu";



const WeatherDetails = () => {
    const degree = 45
    return (
        <div className=" grid grid-cols-3 grid-rows-3 gap-2 content-center ">
            <div className="col-span-2 row-span-2  shadowcss rounded-lg p-10 relative flex flex-col items-center gap-1 justify-center">
                <h2 className='absolute top-4 left-4 text-[16px] text-text2  font-semibold flex gap-2'><FaTemperatureLow className='text-xl' /> Temperature </h2>

                <div className="absolute top-4 right-4">
                    <p className="text-sm text-text1 font-bold">25 ℃ ↑</p>
                    <p className="text-sm text-text1 font-bold">22 ℃ ↓</p>
                </div>

                <h2 className='text-4xl font-semibold flex items-center'>23 ℃ </h2>
                <h2 className='text-lg font-semibold'>Rainy Day</h2>
                <p className='text-center text-sm leading-tight text-text2 line-clamp-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, eum?</p>
            </div>

            <div className="flex items-center justify-center shadowcss rounded-lg relative">
                <h2 className='absolute top-3 left-3 text-[16px] text-text2  font-semibold flex gap-2'><IoMdSunny className='text-xl' /> Morning </h2>
                <div className="absolute bottom-0 grid grid-cols-2 p-2 justify-between">
                    <h2 className='leading-5 text-sm'><span className='font-semibold '>Sun rise:</span> 06:12 AM</h2>
                    <h2 className='leading-5 text-sm'><span className='font-semibold '>Sun set:</span>  06:12 PM</h2>
                </div>

            </div>

            <div className="flex items-center justify-center shadowcss rounded-lg relative">
                <h2 className='absolute top-3 left-3 text-[16px] text-text2  font-semibold flex gap-2'><TbDroplets className='text-xl' /> Humidity </h2>
                <div className="absolute bottom-0 p-2 ">
                    <h2 className='text-2xl font-semibold flex items-center'>82%</h2>
                    <p className='line-clamp-1 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="flex items-center shadowcss rounded-lg relative">
                <h2 className='absolute top-3 left-3 text-[16px] text-text2  font-semibold flex gap-2'><FaSkyatlas className='text-xl' /> Pressure </h2>
                <div className=" p-2 ">
                    <h2 className='text-2xl font-semibold flex items-center '>1015 hpa</h2>

                </div>
            </div>
            <div className="flex items-center shadowcss rounded-lg relative">
                <h2 className='absolute top-3 left-3 text-[16px] text-text2  font-semibold flex gap-2'><MdOutlineVisibility className='text-xl' /> Visibility </h2>
                <div className=" p-2 ">
                    <h2 className='text-2xl font-semibold flex items-center '>1000 m</h2>
                </div>
            </div>
            <div className="flex items-center shadowcss rounded-lg relative">
                <h2 className='absolute top-3 left-3 text-[16px] text-text2  font-semibold flex gap-2'><GiWindSlap className='text-xl' /> Wind </h2>
                <h2 className='text-2xl font-semibold flex items-center p-2 '>0.62 m/s</h2>
                <div className="absolute bottom-2 right-2 p-2 w-10 h-10 rounded-full flex items-center justify-center ">
                    <p className='absolute -top-3 -translate-x-1/2 left-1/2'>N</p>
                    <LuNavigation2 className={`text-xl origin-center`} style={{ transform: `rotate(${degree}deg)` }} />
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails