import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {

  const [formData , setFormData] = useState({});
  const [error , setError] = useState(false);
  const [loading , setLoading] = useState(false);
  const [success , setSuccess] = useState(false);

  //hadling data from input form
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id] : e.target.value})
  };
  console.log(formData)

  //function handle creating user and storing data in database
  const handleSubmit = async(event) =>{
    event.preventDefault();

    try {
      setLoading(true);
      setError(false);
      // setSuccess(true)
      const response = await fetch('api/auth/signup',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await response.json();
      console.log(data);

      setLoading(false);
      
      if(data.success === false){
        setError(true);
        return
      }
      // if(data.success === true){
      //   setSuccess(true)
      //   return
      // }
      
    } catch (error) {
      setLoading(false);
      setError(true)
      // setSuccess(false)
    }
    
    
  }

  return (
    <div className='p-6 mt-6 max-w-lg mx-auto shadow-xl shadow-blue-500/50 rounded-2xl bg-gray-950 text-white'>
    <h1 className='text-4xl text-center font-bold mt-4 capitalize'>Sign Up</h1>

    <form className='flex flex-col gap-4'  onSubmit={handleSubmit}>
    <div className='flex flex-col m-1'>
      <label  className='text-xl font-bold capitalize'>username</label>
    <input 
      type='text'
      id='username'
      placeholder='Username'
      className='bg-slate-100 p-2 my-1 rounded-lg outline-0 hover:border border-blue-800 font-medium text-black'

      onChange={handleChange}

    />
    </div>

    <div className='flex flex-col m-1'>
      <label className='text-xl text-uppercase font-bold capitalize'>Email</label>
    <input 
      type='email'
      id='email'
      placeholder='Email'
      className='bg-slate-100 p-2 my-1 rounded-lg outline-0 hover:border border-blue-800 font-medium text-black'
    
      onChange={handleChange}

    />
    </div>

    <div className='flex flex-col m-1'>
      <label  className='text-xl text-uppercase font-bold capitalize'>password</label>
    <input 
      type='password'
      id='password'
      placeholder='Password'
      className='bg-slate-100 p-2 my-1 rounded-lg outline-0 hover:border border-blue-800 font-medium text-black'

      onChange={handleChange}

    />
    </div>

    <div className='flex flex-col my-2'>
      <button disabled={loading}  type='submit' 
      className='bg-blue-700 text-white p-2 rounded-lg hover:opacity-95 disabled:opacity-80 uppercase font-semibold text-1xl cursor-pointer'>
        {loading? 'Loading...': 'sign up'}
        </button>
      {/* <button type='submit' className='bg-yellow-50 text-black p-2 uppercase rounded-lg mt-3 hover:opacity-95 disabled:opacity-80 font-semibold text-1xl cursor-pointer'>continue with google</button> */}
    </div>
    </form>

    <div className='flex gap-2 mt-4'>
    <p className='font-medium'>Having a account?</p>
    <Link to="/signin">
    <span className='text-blue-700 font-medium'>Sign in</span>
    </Link>
    </div>
    {/* <p className='text-green-400 capitalize mt-5 text-center'>{success && 'User creation successfully'}</p> */}
    <p className='text-red-600 mt-5 text-center capitalize'>{error && 'Somethign went wrong!'}</p>
    </div>
  )
}
