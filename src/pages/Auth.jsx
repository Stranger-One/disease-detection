import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center ">
            <div className="w-[850px] h-[80vh] grid grid-cols-2 shadowcss rounded-lg p-10 ">
                <div
                    className="w-full h-full bg-cover bg-center drop-shadow-2xl"
                    style={{ backgroundImage: `url(/data-access.png)` }}
                ></div>
                <Outlet />
            </div>
        </section>
    )
}

export default Auth