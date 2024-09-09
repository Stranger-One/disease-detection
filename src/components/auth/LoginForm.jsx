import React, { useState } from 'react'
import Input from './Input'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [expert, setExpert] = useState(false)
  const { register, handleSubmit } = useForm()

  const login = (data) => {
    const userData = {
      ...data,
      expertId: expert ? data.expertId : null
    }
    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit(login)} className='w-full flex flex-col items-center justify-between gap-2 shadowcss rounded-lg px-16 py-5' >
      <h2 className='text-3xl text-primary font-bold'>Login</h2>
      <div className="flex flex-col gap-2">
        <Input
          label="Email: "
          placeholder="Enter your Email..."
          {...register("email", {
            required: true,
          })}
        />
        <Input
          label="Password: "
          type="password"
          placeholder="Enter your Password..."
          {...register("password", {
            required: true,
          })}
        />
        <p className='text-sm'>Forgot  <Link to="" className='text-primary hover:drop-shadow-md'> password?</Link></p>
        <div className="flex gap-2">
          <input type="checkbox" id='expert' checked={expert} onChange={() => setExpert(!expert)} />
          <label htmlFor="expert" className='cursor-pointer'>Login as Expert</label>
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
        <button type='submit' className='w-full py-[6px] rounded-lg bg-primary shadowcss text-white text-lg hover:bg-primary/90 mb-3'>Login</button>
        <p className='text-sm '>Don't have an account?  <Link to="/auth/signup" className='text-primary hover:drop-shadow-md'>Sign up here.</Link></p>
      </div>

    </form>
  )
}

export default LoginForm