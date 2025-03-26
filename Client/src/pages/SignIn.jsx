import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='p-6 mt-20 max-w-lg mx-auto shadow-lg shadow-gray-800 rounded-2xl bg-white'>
      <h1 className='font-bold text-3xl text-center mt-4 capitalize'>Sign in</h1>
      <form action="" className='flex flex-col gap-3'>

        <div className='flex flex-col m-1'>
          <label className='font-medium text-2xl capitalize'>Email</label>
          <input type="text" 
          placeholder='Email'
          className='bg-slate-100 p-2 rounded-lg my-1 outline-0 text-black hover:border border-blue-800'
          />
        </div>

        <div className='flex flex-col m-1'>
          <label className='font-medium text-2xl capitalize'>Password</label>
          <input type="password" 
          placeholder='Password'
          className='bg-slate-100 p-2 my-1 rounded-lg outline-0 text-black hover:border border-blue-800'
          />
        </div>

        <button type='submit' className='bg-blue-700 p-2 mt-2 rounded-lg font-medium text-white cursor-pointer uppercase hover:opacity-95 disabled:opacity-80'>
          Sign in
        </button>
      </form>

      <div className='flex gap-2 mt-4'>
        <p className='font-medium'>Don't have account?</p>
        <Link to="/signup">
        <span className='font-medium text-blue-700'>Sign up</span>
        </Link>
      </div>

    </div>
  )
}
