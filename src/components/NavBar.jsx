import React from 'react'
import {FaBars} from 'react-icons/fa'
import {SiYoutube} from 'react-icons/si'
import {FaTimes} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdKeyboardVoice} from 'react-icons/md'
import {BiVideoPlus} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'

const NavBar = () => {
  return (
    <div className='bg-black flex grid-cols-3'>
        <div className='flex grid-cols-2 w-1/4'>
            <div className='text-white mx-5 mt-6 mb-5'>
                <FaBars size={20}/>
            </div>
            <div className='text-white flex grid-cols-2 text-xl my-5 ml-5'>
                <SiYoutube size={30} className='text-red-600'/>YouTube<span className='text-gray-500 text-xs mt-0'>NG</span>
            </div>
        </div>

        <div className='flex items-center justify-center grid-cols-3 w-1/2'>
            <div className='border border-gray-500 flex h-10 rounded-s-2xl'>
                <p className='text-white flex ml-4 pt-2 py-5'>Search</p>
                <FaTimes size={30} className='flex pt-2 ml-80 text-white font-thin'/>
            </div>
            <div>
                <AiOutlineSearch size={40} className='text-white bg-gray-500 px-2 rounded-e-3xl'/> 
            </div>
            <div>
                <MdKeyboardVoice size={40} className='bg-gray-800 bg-opacity-50 text-white ml-3 px-2 rounded-full'/>
            </div>
        </div>

        <div className='flex grid-cols-3 items-end justify-end w-1/4 my-5'>
            <div>
                <BiVideoPlus size={30} className='text-white mr-6'/>
            </div>
            <div>
                <IoIosNotificationsOutline size={30} className='text-white mr-6'/>
            </div>
            <div className='bg-orange-600 rounded-full mr-6'>
                <p className=' text-white px-3 py-1'>G</p>
            </div>
        </div>

    </div>
    
  )
}

export default NavBar