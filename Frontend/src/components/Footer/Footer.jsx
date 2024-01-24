import React from 'react'
import { Link } from 'react-router-dom'
import {RiLinkedinFill} from "react-icons/ri"
import { AiFillGithub,AiFillInstagram } from 'react-icons/ai'
import Neuron1 from "../../assets/Images/Neuron1.png"

const socialLinks=[
  {
    path:"https://github.com/Mufasa167",
    icon:<AiFillGithub className='group-hover:text-white w-4 h-5'/>,
  },
  {
    path:"https://www.linkedin.com/in/mustafa-kaddan-8144a214b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B69LHwiIQTbekJ51pGosw%2Fg%3D%3D",
    icon:<RiLinkedinFill className='group-hover:text-white w-4 h-5'/>,
  },
  {
    path:"",
    icon:<AiFillInstagram className='group-hover:text-white w-4 h-5'/>,
  },
]

const quickLinks1=[
  {
    path:"/home",
    display:"Home",
  },
  {
    path:"/service",
    display:"Services",
  },
  {
    path:"/",
    display:"Blog",
  },
]

const quickLinks2=[
  {
    path:"/professionals",
    display:"Look for Doctors/Testers",
  },
  {
    path:"/",
    display:"Location",
  },
  {
    path:"/professionalDetail",
    display:"Request an Appointment",
  },
]

const quickLinks3=[
  {
    path:"/contact",
    display:"Contact Us",
  },
  {
    path:"/register",
    display:"Register Now",
  },

]



const Footer = () => {
  const year= new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10'>
    <div className='container'>
      <div className='flex justify-between  flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
          <img className='w-[80px] h-[80px]' src={Neuron1} alt=''/>
          <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
            Copyright © {year} Mustafa Kaddan. All rights reserved
          </p>
          <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map((link,index)=>(
              <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E]
              rounded-full flex items-center justify-center group hover:bg-primaryColor
              hover:border-none'>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-10 text-headingColor '>Quick Links</h2>

          <ul>
            {quickLinks1.map((item,index)=>(
            <li key={index} className='mb-4'>
              <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                {item.display}</Link>
                </li>))}
          </ul>
      </div>


      <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-10 text-headingColor '>I want to:</h2>

          <ul>
            {quickLinks2.map((item,index)=>(
            <li key={index} className='mb-4'>
              <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                {item.display}</Link>
                </li>))}
          </ul>
      </div>

      <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-10 text-headingColor '>Support</h2>

          <ul>
            {quickLinks3.map((item,index)=>(
            <li key={index} className='mb-4'>
              <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                {item.display}</Link>
                </li>))}
          </ul>
      </div>


      </div>
    </div>
  </footer>
  )
}

export default Footer
