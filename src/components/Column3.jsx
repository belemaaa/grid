import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Column3 = () => {
  return (
    <div className='flex flex-row w-1/2 bg-black text-white'>
        <div className='ml-20'>
          <div className='mt-6 ml-4'>
            <p className='flex border-b border-b-gray-500 pb-2 text-white text-opacity-50 w-72'>
              <AiOutlineSearch size={20} className='text-white text-opacity-50 mr-2'/>
            Search watch history </p>
          </div>

          <div className='flex flex-col text-sm'>
            <p className='mt-8 border-b border-b-gray-500 pb-4'>History type</p>
            <p className='mt-4 border-b border-b-gray-500 pb-4 flex flex-row'>Watch history</p>
            <p className='mt-4 border-b border-b-gray-500 pb-4 mb-6 flex flex-row'>Community</p>
          </div>

          <div className='flex flex-col'>
            <p className='mb-4 flex flex-row'>Clear all watch history</p>
            <p className='mb-4 flex flex-row'>Pause watch history</p>
            <p className='mb-4 flex flex-row'>Manage all history</p>
          </div>
        </div>
    </div>
  )
}

export default Column3