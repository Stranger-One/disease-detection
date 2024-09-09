import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <section className='w-full'>
        <Outlet />
    </section>
  )
}

export default HomeLayout