import hero1 from "../../src/assets/Images/hero1.png"
import iconD from "../../src/assets/Images/iconD.png"
import iconT from "../../src/assets/Images/iconT.png"
import iconL from "../../src/assets/Images/iconL.png"
import faq from "../../src/assets/Images/faq1.png"
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from "../components/About/About.jsx"
import ServiceList from '../components/Services/ServiceList.jsx'
 import ProfessionalList from '../components/Professionals/ProfessionalList'
import FaqList from "../components/Faq/FaqList.jsx"





const Home = () => {
  return (
    <>
    
    <section className='hero_section pt-[60px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] item-center justify-between'>
          <div>
           <div className='lg:2-[570px]'>
            <h1 className='text-navColor text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
            md:leading-[70px]'>We provide a professional and fast diagnosis process for ADHD</h1>
            <p className='text__para text-navColor'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Ratione tempore assumenda deleniti at hic dicta praesentium vitae perferendis, placeat a!</p>
             <button className='btn'>Request a Consultation Appointment</button>
             <button className='btn'>Request a Test Appointment</button>
           </div>
           <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
           lg:gap-[30px]'>
            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-navColor'>30+</h2>
              <span  className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
              <p className='text__para text-navColor'>Doctor's Years of Experience</p>
            </div>
           
            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-navColor'>13+</h2>
              <span  className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
              <p className='text__para text-navColor'>Years of giving Neuro-Tech Diagnosis and Solutions</p>
            </div>


            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-navColor'>100%</h2>
              <span  className='w-[100px] h-2 bg-redColor rounded-full block mt-[-14px]'></span>
              <p className='text__para text-navColor'>Response rate and patient satisfaction</p>
            </div>
    
           </div>
            
          </div>
        <div className='flex gap-[30px] justify-end'>
          <div>
            <img className="w-full" src={hero1} alt=''/>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Giving all of our Focus to our patients!</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          <div className='py-[30px] px-5'>
            <div className='flex item-center justify-center'>
              <img className='w-[105px] h-[105
                px] cursor-pointer' src={iconD} alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] text-center leading-9 text-headingColor font-[700]'>Book a Doctor's appointment</h2>
                <Link to='/professionals' className='w-[44px] h-[44px] rounded-full border border-solid border=[#181A1E] mt-[30px]
                mx-auto flex items-center justify-center group 
                hover:bg-primaryColor hover:border-none'><BsArrowRight className='group-hover:text-white w-6 h5'/></Link>
              </div>
          </div>

          <div className='py-[30px] px-5'>
            <div className='flex item-center justify-center'>
              <img className='w-[105px] h-[105
                px] cursor-pointer' src={iconL} alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] text-center leading-9 text-headingColor font-[700]'>Get the Location of the clinic</h2>
                <Link to='/professionals' className='w-[44px] h-[44px] rounded-full border border-solid border=[#181A1E] mt-[30px]
                mx-auto flex items-center justify-center group 
                hover:bg-primaryColor hover:border-none'><BsArrowRight className='group-hover:text-white w-6 h5'/></Link>
              </div>
          </div>


          <div className='py-[30px] px-5'>
            <div className='flex item-center justify-center'>
              <img className='w-[105px] h-[105
                px] cursor-pointer' src={iconT} alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] text-center leading-9 text-headingColor font-[700]'>Book a MOXO test appointment</h2>
                <Link to='/professionals' className='w-[44px] h-[44px] rounded-full border border-solid border=[#181A1E] mt-[30px]
                mx-auto flex items-center justify-center group 
                hover:bg-primaryColor hover:border-none'><BsArrowRight className='group-hover:text-white w-6 h5'/></Link>
              </div>
          </div>
        </div>
       
      </div>
    </section>
    <About/>
    

    <section>
      <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Our Services</h2>
      </div>
      <ServiceList/>
    </section>

    <section >
      <div className='container'>
      <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center'>Meet the Pros!</h2>
      </div>
      <ProfessionalList/>
      </div>
    </section>


    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block"><img src={faq} alt=""/></div>
          <div className="w-full md:w-1/2">
            <h2 className="heading">Most frequently asked questions</h2>
            <FaqList/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
