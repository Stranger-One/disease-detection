import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../store/globalSlice';
import { RiDashboardLine } from "react-icons/ri";

import { AiOutlineHome } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { MdOutlineLogout } from "react-icons/md";




const NavigationPnl = () => {
  const navMenu = useSelector(state => state.global.navigationMenu)
  const dispatch = useDispatch()

  console.log(navMenu);

  const toggleNav = () => {
    dispatch(toggleMenu())
  };


  const links = [
    {
      label: "Home",
      url: "/",
      icon: <AiOutlineHome className='text-2xl' />,
    },
    {
      label: "Dashboard",
      url: "/dashboard",
      icon: <RiDashboardLine className='text-2xl' />,
    },
    {
      label: "Weather",
      url: "/weather",
      icon: <TiWeatherCloudy className='text-2xl' />,
    },
  ]

  return (
    <aside className='h-screen w-full relative grid grid-rows-[7vh_93vh] '>
      <div className=" flex items-center border-b-2 border-text1 px-2">
        <span onClick={toggleNav} className='p-1 bg-surface rounded-lg cursor-pointer'><HiMenuAlt2 className='text-2xl' /></span>
      </div>
      <div className="">
        <ul className={`h-full  flex flex-col gap-2 p-2 relative bg-background z-[10000] ${navMenu ? 'w-60' : 'w-full'} shadowcss `}>
          {links.map((link, index) => (
            <Link key={index} to={link.url} onClick={toggleNav} >
              <li className="flex items-center bg-surface p-1 rounded-lg gap-2 ">
                <React.Fragment>
                  {link.icon}
                </React.Fragment>
                <h3 className={`${navMenu ? '' : 'hidden'}`}>{link.label}</h3>
              </li>
            </Link>
          ))}

          <button className='absolute bottom-4 ' >
            <li className="flex items-center bg-surface p-1 rounded-lg gap-2 w-full">
              <MdOutlineLogout className='text-2xl' />
              <h3 className={`${navMenu ? 'hidden' : 'hidden'}`}>Log out</h3>
            </li>
          </button>
        </ul>

      </div>

    </aside>
  )
}

export default NavigationPnl