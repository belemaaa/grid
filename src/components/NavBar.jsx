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
        <div className='flex flex-col-2 w-1/4'>
            <div className='text-white mx-5 my-5'>
                <FaBars size={30}/>
            </div>
            <div className='text-white flex grid-cols-2 text-xl my-5 ml-5'>
                <SiYoutube size={30} className='text-red-600'/>YouTube<span className='text-gray-500 text-xs mt-0'>NG</span>
            </div>
        </div>

        <div className='grid grid-cols-2 w-1/2 my-5'>
            <div className='border border-gray-500 flex grid-cols-2 h-10 rounded-3xl'>
                <p className='text-white'>Search</p>
            </div>
        </div>

    </div>
    
  )
}

export default NavBar