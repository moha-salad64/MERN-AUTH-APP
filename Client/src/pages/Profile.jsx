import React from 'react'
import { useSelector } from 'react-redux'
export default function Profile() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-bold text-center my-8'>profile</h1>
      <form className='flex flex-col gap-4'>
      <img src={currentUser.profilePicture} alt="profile" 
      className='h-23 w-23 rounded-full self-center object-cover cursor-pointer mt-3'
      />

      <input 
      type="text" 
      placeholder='Username'
      className='bg-slate-200 p-3 rounded-lg'
      defaultValue={currentUser.username}
      />
      <input 
      type="email"
       placeholder='Email'
       className='bg-slate-200 p-3 rounded-lg'
       defaultValue={currentUser.email}
       />
      <input 
      type="password" 
      placeholder='Password' 
      className='bg-slate-200 p-3 rounded-lg'
      />

      <button 
      className='bg-gray-800 text-white p-2 cursor-pointer font-semibold uppercase rounded-lg'>
        update
      </button>
      </form>
      <div className='flex justify-between mt-3 font-medium'>
        <span className='text-red-700 cursor-pointer'>dalate account</span>
        <span className='text-red-700 cursor-pointer'>sign out</span>
      </div>
    </div>
  )
}