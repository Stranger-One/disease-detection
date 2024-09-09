import React from 'react'
import { AnalyseReport, Upload } from '../components'
import { Outlet } from 'react-router-dom'

const Analysis = () => {
  return (
    <section className="w-full h-[93vh]">
        <Outlet />
    </section>
  )
}

export default Analysis