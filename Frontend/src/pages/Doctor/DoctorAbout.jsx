import React from 'react'
import { formateDate } from '../../utils/formateDate'
const DoctorAbout = () => {
  return (
    <div>
        <div>
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
        About of
        <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Mustafa Kaddan</span>
      </h3>
      <p className="text__para text-textColor">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Libero atque eum animi repudiandae earum labore a tempore voluptatum in beatae.</p>
    </div>

    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Education
        </h3>
        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate("12-01-1998")}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PHd in whatever sciences</p>
                </div>
            </li>
        </ul>
    </div>
</div>
  )
}

export default DoctorAbout
