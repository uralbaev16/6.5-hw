import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-500'>
      <nav className="container mx-auto h-20 shadow-md px-4 py-2 flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className=" text-white ml-4 text-xl font-bold">Tailwind UI</span>
        </div>
        <input className='w-60 rounded-md px-2 py-1' type="text" name="" id="" placeholder='Saerch'/>
        <div className="">
          <button className="flex items-center px-3 py-2 border-2 text-md bg-gray-700 rounded-md text-white hover:text-gray-400 bg-gray-800 duration-300">Menu</button>
        </div>
      </nav>
    </div>
  )
}

export default Header