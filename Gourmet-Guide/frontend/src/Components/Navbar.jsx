import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='flex gap-60 px-4 text-orange-500 bg-black py-2 items-center rounded-md'>
        <div className='text-3xl font-extrabold animate-bounce'>
            Gourmet-Guide
        </div>
        <div >
            <ul className='flex gap-14'>
           <Link to='/'> <li className='hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg '>Home</li></Link>
            <li className='p-2'>|</li>
           <Link to='/create'><li className=' hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg'>Create</li></Link> 
            <li className='p-2'>|</li>
           <Link to='/save'><li className='hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg'>Saved</li></Link> 
            
            </ul>
        </div>
        <div className='hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg'>
           <Link to='auth'> Login/Register </Link>
        </div>
    </div>
    
    
    </>
    
  )
}

export default Navbar