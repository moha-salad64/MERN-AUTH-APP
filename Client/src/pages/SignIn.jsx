import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { singInStart, signinSuccess,signInFailure } from '../redux/user/userSlice.js';
import {useDispatch, useSelector} from 'react-redux'

export default function SignIn() {

  const [formData , setFormData] = useState({});
  const {loading , error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange =  (e)  =>{
    setFormData({...formData , [e.target.id] : e.target.value})
  }

  const handleSubmit = async (event) =>{
    event.preventDefault();

    try {
      dispatch(singInStart);
      // dispatch(signInFailure);
      // setLoading(true);
      // setError(false);
      const response = await fetch('api/auth/signin' , {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      // console.log(data);

      if(data.success === false){
        // setError(true);
        // setSuccess(false)
        dispatch(signInFailure(data))
        return
      }
      dispatch(signinSuccess(data))
      navigate('/');

      // setLoading(false);
      // setSuccess(true)      
      
    } catch (error) {
      // setLoading(false);
      // setError(true)
      // setSuccess(false)
      // dispatch(signInFailure(error));
      console.log(error.message)
      
    }
   
  }
  

  return (
    <div className='p-6 mt-20 max-w-lg mx-auto shadow-lg shadow-gray-800 rounded-2xl bg-white'>
      <h1 className='font-bold text-3xl text-center mt-4 capitalize'>Sign in</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

        <div className='flex flex-col m-1'>
          <label className='font-medium text-2xl capitalize'>Email</label>
          <input type="text" 
          id='email'
          placeholder='Email'
          className='bg-slate-100 p-2 rounded-lg my-1 outline-0 text-black hover:border border-blue-800'
          onChange={handleChange}
          />
        </div>

        <div className='flex flex-col m-1'>
          <label className='font-medium text-2xl capitalize'>Password</label>
          <input type="password" 
          id='password'
          placeholder='Password'
          className='bg-slate-100 p-2 my-1 rounded-lg outline-0 text-black hover:border border-blue-800'
          onChange={handleChange}
          />
        </div>

        <button disabled={loading} type='submit' className='bg-blue-700 p-2 mt-2 rounded-lg font-medium text-white cursor-pointer uppercase hover:opacity-95 disabled:opacity-80'>
         {loading? 'Loading' : 'Sign in'} 
        </button>
      </form>

      <div className='flex gap-2 mt-4'>
        <p className='font-medium'>Don't have account?</p>
        <Link to="/signup">
        <span className='font-medium text-blue-700'>Sign up</span>
        </Link>
      </div>

      <div>
        <p className='text-red-600 mt-5 text-center capitalize'>{error && 'Something went wrong!'}</p>
      </div>

    </div>
  )
}
