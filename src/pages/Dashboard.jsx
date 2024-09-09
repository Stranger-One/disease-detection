import React, { useEffect, useRef, useState } from 'react'
import { FiCamera } from "react-icons/fi";
import Input from '../components/auth/Input';
import { useForm } from 'react-hook-form';
import { FaRegSave } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiPlusCircle } from "react-icons/fi";
import SwiperSlider from '../components/SwiperSlider';


const Dashboard = () => {
    const { register, handleSubmit } = useForm()
    const overlay = useRef()
    const [overlayOpen, setOverlayOpen] = useState(false)

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target === overlay.current) {
                // Close the overlay logic here
                console.log('close');
                setOverlayOpen(false);  // Uncomment this if using state to control overlay
            }
        };

        // Add event listener
        overlay.current.addEventListener("click", handleClick);

        // Cleanup event listener on unmount
        return () => {
            if (overlay.current) {
                overlay.current.removeEventListener("click", handleClick);
            }
        };
    }, []);
    const save = (data) => {
        const userData = {
            ...data,
            expertId: expert ? data.expertId : null
        }
        console.log(userData);
    };

    return (
        <section className="w-full p-4 flex flex-col gap-6 relative">
            {/* profile */}
            <div className="w-full flex items-center justify-center py-10 shadowcss rounded-lg">
                <div className="flex items-center gap-10">
                    <div className="h-44 w-44 bg-surface rounded-full relative overflow-hidden bg-cover bg-no-repeat bg-center cursor-pointer group" style={{
                        backgroundImage: `url(/user-profile-icon.jpg)`
                    }}
                    >
                        <div className="w-full flex items-center justify-center py-1 bg-slate-500/50 absolute bottom-0 group-hover:bg-slate-500/70">
                            <FiCamera className='text-text1 text-3xl' />
                        </div>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit(save)} className='grid grid-cols-2 gap-2'>
                            <Input
                                label="Full Name: "
                                placeholder="Your full name"
                                {...register("name", {
                                    required: true,
                                })}
                            />
                            <Input
                                label="Email: "
                                placeholder="Enter your Email..."
                                {...register("email", {
                                    required: true,
                                })}
                            />
                            <Input
                                label="Phone: "
                                placeholder="Enter your Phone..."
                                {...register("phone", {
                                    required: false,
                                })}
                            />
                            <div className="col-span-full mt-10 flex justify-end">
                                <button to="home/analysis" className='text-lg flex whitespace-nowrap gap-2 items-center px-10 py-2 bg-primary rounded-lg text-background font-semibold'><FaRegSave className='text-xl' /> Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* alerts */}
            <div className="w-full py-4 shadowcss rounded-lg">
                <div className="w-full flex items-center justify-between px-4 mb-4">
                    <h2 className='text-2xl font-semibold'>Your Alerts </h2>
                    <Link to="" className='flex gap-2 items-center bg-secondary px-4 py-2 rounded-lg shadowcss'  ><FiPlusCircle /> Add Another</Link>
                </div>
                <div className="w-full h-[250px] ">
                    <SwiperSlider setOverlayOpen={setOverlayOpen} />
                </div>
            </div>

            {/* crop monitoring */}
            <div className="w-full py-4 shadowcss rounded-lg">
                <div className="w-full flex items-center justify-between px-4 mb-4">
                    <h2 className='text-2xl font-semibold'>Crop Monitoring </h2>
                    <Link to="" className='flex gap-2 items-center bg-secondary px-4 py-2 rounded-lg shadowcss'  ><FiPlusCircle /> Add Another</Link>
                </div>
                <div className="w-full h-[250px] ">
                    <SwiperSlider setOverlayOpen={setOverlayOpen} />
                </div>
            </div>

            {/* appointments */}
            <div className="w-full py-4 shadowcss rounded-lg">
                <div className="w-full flex items-center justify-between px-4 mb-4">
                    <h2 className='text-2xl font-semibold'>Your Appointments</h2>
                </div>
                <div className="w-full h-[250px] ">
                    <SwiperSlider setOverlayOpen={setOverlayOpen} />
                </div>
            </div>

            <div ref={overlay} className={`fixed  h-full w-full z-10 top-0 left-0 bg-zinc-700/70 backdrop-blur-sm ${overlayOpen ? 'flex' : 'hidden'} items-center justify-center `}>
                <div className="bg-background w-[80%] h-[80%] rounded-lg "></div>
            </div>
        </section>
    )
}

export default Dashboard