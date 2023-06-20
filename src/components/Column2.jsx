import React from 'react'
import crashCourse from '../assets/crash-course.PNG'
import framer from '../assets/framer-motion.PNG'
import paystack from '../assets/paystack.PNG'

const Column2 = () => {
  return (
    <div className='flex w-1/2 bg-black flex-row'>
      <div className='text-white'>
        <div className='mt-6 mb-6'>
          Watch history
        </div>

        <div className='mb-6'>
          Today
        </div>

        <div className='flex grid-cols-2'>
          <div className=''>
            <img src={framer} className='rounded-xl' />
          </div>

          <div className='max-w-sm ml-4 text-justify'>
            <p className='text-lg'>Framer Motion (for React) #1 - <br/> Introduction</p>
            <p className='text-white text-opacity-50 text-xs'>The Net Naija <span className='ml-6'>198k Views</span></p>
            <p className='text-xs text-white text-opacity-50 mt-1'>Hey gang - welcome to your first Frame Motion (for React) tutorial. In 
            this tutorial, I'll explain what Framer Motion is and what you'll need t...
            </p>
          </div>

        </div>

        <div className='flex grid-cols-2 mt-3'>
          <div className=''>
            <img src={crashCourse} className='rounded-xl' />
          </div>

          <div className='max-w-sm ml-4 text-justify'>
            <p className='text-lg'>React JS Crash Course</p>
            <p className='text-white text-opacity-50 text-xs'>Traversy Media<span className='ml-6'>3.1M Views</span></p>
            <p className='text-xs text-white text-opacity-50 mt-2'>Get started with React in this crash course. We will be building a task 
            tracker app and look at components, props, state, hooks, working...
            </p>
          </div>

        </div>

        <div className='flex grid-cols-2 mt-3'>
          <div className=''>
            <img src={paystack} className='rounded-xl' />
          </div>

          <div className='max-w-sm ml-4 text-justify'>
            <p className='text-lg'>Paystack Payment Verification<br/> integration in Python Django</p>
            <p className='text-white text-opacity-50 text-xs'>BiggiDroid<span className='ml-6'>3.4k Views</span></p>
            <p className='text-xs text-white text-opacity-50 mt-1'>Getting Paystack payment verification integration is one of the best
            ideas to accept payments on an e-commerce website. Sourcecode:...
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Column2