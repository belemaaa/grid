import React from 'react'
import {GoHome} from 'react-icons/go'
import {IoPlaySkipForwardOutline} from 'react-icons/io'
import {BsCollectionPlay} from 'react-icons/bs'
import {MdOutlineVideoLibrary} from 'react-icons/md'
import {BiTimeFive} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'
import {BiLike} from 'react-icons/bi'
import {TbCirclePlus} from 'react-icons/tb'
import {HiFire} from 'react-icons/hi'

const Column1 = () => {
  return (
    <div className='flex items-start justify-start w-1/4 bg-black flex-row'>
      <div className='mt-6 text-white'>
        <div className='mb-5'>
          Home
        </div>
        <div className='mt-5'>
          Shorts
        </div>
        <div className='my-5'>
          Subscriptions
        </div>
        <div className='my-5'>
          Library
        </div>
        <div className='my-5'>
          History
        </div>
        <div className='my-5'>
          Watch Later
        </div>
        <div className='my-5'>
          Django Projects
        </div>
        <div className='my-5'>
          Liked Videos
        </div>
        <div>
          Subscriptions
        </div>
        <div className='my-5'>
          Dennis Ivy
        </div>
        <div className='my-5'>
          Browse Channel
        </div>
        <div className='my-5'>
          Explore
        </div>
        <div className='my-5'>
          Trending
        </div>
      </div>
       
    </div>
  )
}

export default Column1