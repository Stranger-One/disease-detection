import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Input from './Input';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    const [expert, setExpert] = useState(false)
    const { register, handleSubmit } = useForm()

    const signup = (data) => {
        const userData = {
            ...data,
            expertId: expert ? data.expertId : null
        }
        console.log(userData);
    };

    return (
        <form onSubmit={handleSubmit(signup)} className='w-full flex flex-col items-center justify-between gap-1 shadowcss rounded-lg px-16 py-2' >
            <h2 className='text-3xl text-primary font-bold'>Sign Up</h2>
            <div className="flex flex-col gap-1">
                <Input
                    label="Full Name: "
                    placeholder="Your full name"
                    {...register("name", {
                        required: true,
                    })}
                />
                <Input
                    label="Email: "
                    placeholder="Your Email "
                    {...register("email", {
                        required: true,
                    })}
                />
                <Input
                    label="Password: "
                    type="password"
                    placeholder="Password "
                    {...register("password", {
                        required: true,
                    })}
                />
                <div className="flex gap-2">
                    <input type="checkbox" id='expert' checked={expert} onChange={() => setExpert(!expert)} /> 
                    <label htmlFor="expert" className='cursor-pointer'>Sign up as Expert</label>
                </div>

                {expert && <Input
                    type="text"
                    placeholder="Your expert id "
                    {...register("expertId", {
                        required: true,
                    })}
                />}
            </div>
            <div className="w-full">
                <button type='submit' className='w-full py-[6px] rounded-lg bg-primary shadowcss text-white text-lg hover:bg-primary/90 mb-1'>Sign Up</button>

                <p className='text-sm '>Already have an account?  <Link to="/auth/login" className='text-primary hover:drop-shadow-md'>Login here.</Link></p>
            </div>

        </form>
    )
}

export default SignupForm