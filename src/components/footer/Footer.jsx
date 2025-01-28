import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="mt-6 bg-slate-500 text-white p-4 flex items-center justify-between">
            <span>Tailwind UI &copy; 2021</span>
            <div className="flex items-center">
              <a href="#" className="text-sm ml-4">About</a>
              <a href="#" className="text-sm ml-4">Help</a>
              <a href="#" className="text-sm ml-4">Contact</a>
            </div>
          </div>
    </div>
  )
}

export default Footer