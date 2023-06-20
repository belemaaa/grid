import React from 'react'
import Column1 from './Column1'
import Column2 from './Column2'
import Column3 from './Column3'

const MainPage = () => {
  return (
    <div className="grid grid-cols-3">
        <div className="w-1/3 bg-gray-200 text-red-500">Column 1</div>
        <div className="w-1/3 bg-gray-300">Column 2</div>
        <div className="w-1/3 bg-gray-400">Column 3</div>
        <h1 className='text-red-50'>Hi</h1>
    </div>
  )
}

export default MainPage