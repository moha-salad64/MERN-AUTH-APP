import React from 'react'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-4xl text-center font-bold my-7'>Sign Up</h1>

    <form className='flex flex-col gap-4'>
    <div className='flex flex-col m-1'>
      <label  className='text-2xl text-uppercase font-bold capitalize'>username</label>
    <input 
      type='text'
      placeholder='username'
       className='bg-slate-100 p-2 my-1 rounded-lg outline-0 '
    />
    </div>

    <div className='flex flex-col m-1'>
      <label className='text-2xl text-uppercase font-bold capitalize'>Email</label>
    <input 
      type='email'
      placeholder='Email'
      className='bg-slate-100 p-2 my-1 rounded-lg outline-0'
    />
    </div>

    <div className='flex flex-col m-1'>
      <label  className='text-xl text-uppercase font-bold capitalize'>password</label>
    <input 
      type='password'
      placeholder='Password'
      className='bg-slate-100 p-2 my-1 rounded-lg outline-0'
    />
    </div>

    <div className='flex flex-col'>
      <button type='submit' className='bg-slate-700 text-white p-2 rounded-lg hover:opacity-95 disabled:opacity-80 uppercase font-semibold text-1xl'>sign up</button>
      <button type='submit' className='bg-red-600 text-white p-2 uppercase rounded-lg my-2 hover:opacity-95 disabled:opacity-80 font-semibold text-1xl'>continue with google</button>
    </div>
    </form>
    </div>
  )
}
