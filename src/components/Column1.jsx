import React from 'react'
import {GoHome} from 'react-icons/go'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {BsCollectionPlay} from 'react-icons/bs'
import {MdOutlineVideoLibrary} from 'react-icons/md'
import {GiBackwardTime} from 'react-icons/gi'
import {BiTimeFive} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'
import {BiLike} from 'react-icons/bi'
import {TbCirclePlus} from 'react-icons/tb'
import {HiFire} from 'react-icons/hi'

const Column1 = () => {
  return (
    <div className='flex items-start justify-start w-60 bg-black'>
      <div className='mt-6 text-white text-xs'>
        <div className='mb-5 flex flex-row'>
          <GoHome size={20} className='ml-4 mr-8'/>
          <p>Home</p>
        </div>

        <div className='mt-5 flex flex-row'>
          <AiOutlinePlayCircle size={20} className='ml-4 mr-8'/>
          <p>Shorts</p>
        </div>

        <div className='my-5 flex flex-row'>
          <BsCollectionPlay size={20} className='ml-4 mr-8'/>
          <p>Subscriptions</p>
        </div>

        <div className='border border-gray-500 my-5 ml-4 w-full font-light' />

        <div className='my-5 flex flex-row'>
          <MdOutlineVideoLibrary size={20} className='ml-4 mr-8'/>
          <p>Library</p>
        </div>

        <div className='my-5 flex flex-row'>
          <GiBackwardTime size={20} className='ml-4 mr-8'/>
          <p>History</p>
        </div>

        <div className='my-5 flex flex-row'>
          <BiTimeFive size={20} className='ml-4 mr-8'/>
          <p>Watch Later</p>
        </div>

        <div className='my-5 flex flex-row'>
          <RiPlayListAddLine size={20} className='ml-4 mr-8'/>
          <p>Django</p>
        </div>

        <div className='my-5 flex flex-row'>
          <BiLike size={20} className='ml-4 mr-8'/>
          <p>Liked Videos</p>
        </div>

        <div className='border border-gray-500 my-5 ml-4 w-full font-light' />

        <div className='ml-4'>
          Subscriptions
        </div>

        <div className='my-5 flex flex-row'>
          <p className='ml-4 mr-6 bg-blue-400 rounded-full px-2'>D</p>
          <p>Dennis Ivy</p>
        </div>

        <div className='my-5 flex flex-row'>
          <TbCirclePlus size={20} className='ml-4 mr-8'/>
          <p>Browse Channels</p>
        </div>

        <div className='border border-gray-500 my-5 ml-4 w-full font-light' />

        <div className='my-5 ml-4'>
          Explore
        </div>

        <div className='my-5 flex flex-row'>
          <HiFire size={20} className='ml-4 mr-8'/>
          <p>Trending</p>
        </div>
      </div>
       
    </div>
  )
}

export default Column1