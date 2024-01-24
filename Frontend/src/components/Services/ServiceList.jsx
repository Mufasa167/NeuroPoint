import React from 'react'
import {services} from "../../assets/Data/services"
import ServiceCard from "./ServiceCard"
const ServiceList = () => {
  return (
    <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 gap-5 lg:gap-[30px] mt-[30px] 
    lg:mt-[55px]'>
      {services.map((item,index)=><ServiceCard item={item} index={index} key={index}/>)}
    </div>
  )
}

export default ServiceList
