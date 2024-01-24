import React from 'react'
import aboutImg from "../../assets/Images/about.png"
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg: flex-row'>
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                   <img className='rounded-full mb-4 lg:mb-0 w-[400px] h-[400px] mr-auto' src={aboutImg} alt='' />
                </div>

                <div className='w-full text-left lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ml-auto'>
                    
                    <h2 className='heading'>Professionalism, Maximum Care & Compassion</h2>
                    <p className='text__para text-textColor'>For more than 13 years and counting, we have took care and helped many patients overcome their issues.
                        People from across the country come to the clinic for the treatment we provide, and that's for a reason.
                    </p>
                    <Link to="/"><button className='btn'>Learn More</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
