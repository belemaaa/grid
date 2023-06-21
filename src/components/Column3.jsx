import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsCircle} from 'react-icons/bs'
import {BsRecordCircle} from 'react-icons/bs'
import {TfiTrash} from 'react-icons/tfi'
import {AiOutlinePause} from 'react-icons/ai'
import {LuSettings} from 'react-icons/lu'

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
            <p className='mt-4 border-b border-b-gray-500 pb-4 flex flex-row'>Watch history
            <BsRecordCircle size={20} className='ml-44 text-blue-300'/> </p>
            <p className='mt-4 border-b border-b-gray-500 pb-4 mb-6 flex flex-row'>Community
            <BsCircle size={18} className='ml-48 text-white'/> </p>
          </div>

          <div className='flex flex-col text-sm'>
            <p className='mb-4 flex flex-row rounded-full bg-white bg-opacity-20 w-fit px-3 py-2'>
              <TfiTrash size={20} className='text-white mr-3'/>
              Clear all watch history</p>
            <p className='mb-4 flex flex-row rounded-full bg-white bg-opacity-20 w-fit px-3 py-2'>
              <AiOutlinePause size={20} className='text-white mr-3'/>
              Pause watch history</p>
            <p className='mb-4 flex flex-row rounded-full bg-white bg-opacity-20 w-fit px-3 py-2'>
              <LuSettings size={20} className='text-white mr-3'/>
              Manage all history</p>
          </div>

          <div className='flex flex-col text-xs ml-12 text-white text-opacity-50'>
            <p className='mb-4'>Watch and search history</p>
            <p className='mb-4'>Comments</p>
            <p className=''>Live chat</p>
          </div>
        </div>
    </div>
  )
}

export default Column3