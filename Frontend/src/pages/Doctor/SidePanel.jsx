import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className='mt-[30px]'>
            <p className='text__para mt-0 font-semibold text-headingColor'>Available Time Slots:</p>
            <ul className='mt-3'>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Sunday:
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        12:00-14:00
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Monday:
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        12:00-14:00
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Thursday:
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        12:00-14:00
                    </p>
                </li>
            </ul>
        </div>
      <button className='btn px-2 w-full rounded-md'>Book An Appointment</button>
    </div>
  )
} 

export default SidePanel
