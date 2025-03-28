import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-sky-200'>
        <div className='flex justify-between items-center max-w-6xl 
        mx-auto p-3'>
        <Link to="/"><h1 className='font-bold text-xl'>Auth App</h1></Link>
        <ul className='flex gap-2 font-bold'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/signin"><li>Sign in</li></Link>
        </ul>
        </div>

    </div>
  )
}
