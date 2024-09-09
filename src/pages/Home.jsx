import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { Category } from '../components';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section className="w-full ">
      {/* hero section */}
      <div className="w-full h-[83vh]  bg-cover bg-center  " style={{
        backgroundImage: `url('/planting-tree-background.jpg')`
      }}>
        <div className="w-full h-full flex flex-col justify-end py-20 gap-10 items-center  " style={{
          background: 'linear-gradient(transparent, gray)'
        }}>
          <h1 className="text-3xl font-bold text-gray-900 text-center">AI-Powered Crop Disease Prediction <br /> & <br /> Farming Solutions</h1>
          <div className="flex gap-4">
            <Link to="home/analysis" className='text-lg flex whitespace-nowrap gap-2 items-center px-10 py-2 bg-primary rounded-lg text-background font-semibold'><IoCameraOutline className='text-2xl' /> Analyze Your Crop</Link>
            <Link to="" className='text-lg flex whitespace-nowrap gap-2 items-center px-10 py-2 bg-secondary rounded-lg text-text1 font-semibold'><IoMdDownload className='text-2xl' /> Download App</Link>
          </div>
        </div>
      </div>

      {/* crops category */}
      <Category />

      
    </section>
  )
}

export default Home