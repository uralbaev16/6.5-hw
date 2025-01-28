import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div className='bg-slate-500'>
      <nav className="container mx-auto h-20 shadow-md px-4 py-2 flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Link to={"/"}><span className=" text-white ml-4 text-xl font-bold">Tailwind UI</span></Link>
        </div>
        <ul className="flex gap-2">
          <li>
            <span><NavLink to={"/"}>Home</NavLink></span>
          </li>
          <li>
            <span><NavLink to={"/about"}>About</NavLink></span>
          </li>
          <li>
            <span><NavLink to={"/contact"}>Contact</NavLink>
            </span>
          </li>
          <li>
            <span><NavLink to={"/login"}>Login</NavLink>
            </span>
          </li>
        </ul>
        <input className='w-60 rounded-md px-2 py-1' type="text" name="" id="" placeholder='Saerch' />
        <div className="">
          <button className="flex items-center px-3 py-2 border-2 text-md rounded-md text-white hover:text-gray-400 bg-gray-800 duration-300">Menu</button>
        </div>
      </nav>
    </div>
  )
}

export default Header