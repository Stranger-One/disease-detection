import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { NavigationPnl } from './components'
import { useSelector } from 'react-redux'
import { IoSearch } from "react-icons/io5";


const App = () => {
  const navMenu = useSelector(state => state.global.navigationMenu)
  const location = useLocation()
  // console.log(location.pathname);

  const handleSearch = (e) => {
    e.preventDefault()
  };

  return (
    <section className={`w-full h-screen bg-background grid ${navMenu ? 'grid-cols-[50px_auto]' : 'grid-cols-[50px_auto]'} duration-200`}>
      <NavigationPnl />
      <div className="h-screen  relative grid grid-rows-[7vh_93vh]">
        <div className="w-full sticky top-0 flex items-center justify-between px-4 capitalize font-semibold text-[16px] ">
          <h2>{location.pathname == '/' ? 'Home' : location.pathname}</h2>
          <form onSubmit={handleSearch} className="h-[28px] border-[1px] border-text1 rounded-lg flex flex-nowrap items-center">
            <input type="search" placeholder='Search your Crop ...' className='h-full bg-transparent px-2 outline-none placeholder:font-normal ' />
            <button type="submit" className='px-2'><IoSearch /></button>
          </form>
        </div>
        <div className="w-full relative  homebar overflow-auto innershadowcss">
          <div className="min-h-[93vh] ">
            <Outlet />
          </div>
        </div>
      </div>
    </section>

  )
}

export default App