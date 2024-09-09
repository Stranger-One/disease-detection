import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';

const HourlyForecast = ({ data }) => {
    // console.log(data);
    return (
        <Swiper
            slidesPerView={5.2}
            spaceBetween={8}
            modules={[FreeMode]}
            className="mySwiper p-2"// Ensure the Swiper container fits the parent
        >
            {data.map((item, index) => (
                <SwiperSlide className="rounded-lg shadowcss overflow-hidden">
                    <div className="flex flex-col justify-between h-full p-2 bg-slate-400">
                        <p className='text-sm'>{(item.dt_txt).split(' ')[1]}</p>
                        <h2 className='text-lg font-semibold'>{(item.main.temp - 272).toFixed(2)} ℃</h2>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default HourlyForecast