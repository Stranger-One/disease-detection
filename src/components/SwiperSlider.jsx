import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const SwiperSlider = ({setOverlayOpen}) => {
    return (
        <Swiper
            slidesPerView={5.2}
            spaceBetween={8}
            modules={[FreeMode]}
            className="mySwiper p-2"// Ensure the Swiper container fits the parent
        >
            <SwiperSlide onClick={()=>setOverlayOpen(true)} className="rounded-lg shadowcss" style={{ flexShrink: 0 }}>Slide 1</SwiperSlide>
            <SwiperSlide  onClick={()=>setOverlayOpen(true)} className="rounded-lg shadowcss" style={{ flexShrink: 0 }}>Slide 2</SwiperSlide>
            <SwiperSlide  onClick={()=>setOverlayOpen(true)} className="rounded-lg shadowcss" style={{ flexShrink: 0 }}>Slide 3</SwiperSlide>
            <SwiperSlide  onClick={()=>setOverlayOpen(true)} className="rounded-lg shadowcss" style={{ flexShrink: 0 }}>Slide 4</SwiperSlide>
            <SwiperSlide  onClick={()=>setOverlayOpen(true)} className="rounded-lg shadowcss" style={{ flexShrink: 0 }}>Slide 5</SwiperSlide>
            <SwiperSlide  onClick={()=>setOverlayOpen(true)} className="rounded-lg shadowcss" style={{ flexShrink: 0 }}>Slide 5</SwiperSlide>
            <SwiperSlide  onClick={()=>setOverlayOpen(true)} className="rounded-lg shadowcss" style={{ flexShrink: 0 }}>Slide 5</SwiperSlide>
        </Swiper>


    )
}

export default SwiperSlider