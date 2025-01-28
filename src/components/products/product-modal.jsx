import React from 'react'

const ProductModal = ({oneItem, setOneItem}) => {
  return (
    <>
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-[#0005] flex items-center justify-center shadow-lg">
          <div className="p-6 bg-white rounded-md w-[400px] shadow-md">
            <h2>{oneItem.title}</h2>
            <img src={oneItem.thumbnail} alt={oneItem.title} className="w-full" />
            <p>{oneItem.description}</p>
            <button className="block mx-auto mt-4 bg-slate-400 p-2 rounded-md text-white hover:bg-slate-500 duration-300 active:scale-95 duration-300" onClick={()=> setOneItem(null)}>Close</button>
          </div>
        </div>
        </>
  )
}

export default ProductModal