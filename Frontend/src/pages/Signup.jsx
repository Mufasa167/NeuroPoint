import React, { useState } from 'react'
import signup from "../../src/assets/Images/signup1.gif"
import {Link, useNavigate} from "react-router-dom"
import {BASE_URL} from "../../config.js"
import {toast} from "react-toastify"
import {HashLoader} from "react-spinners/HashLoader"
const Signup = () => {

  const[loading,setLoading]=useState(false)
   
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    role:'',
    gender:''
  })
  
  const navigate= useNavigate()



  const handleInputChange= e=>{
    setFormData({...formData,[e.target.name]: e.target.value})
  } 

  const submitHandler= async event=>{
    event.preventDefault()
    setLoading(true)

    try {
      const res= await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      const {message} = await res.json()
      if(!res.ok){
        throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/login')

    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  return (
    <section className='px-5 xl:px-0'>
  <div className='max-w-[1170px] mx-auto'>
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      {/* Hidden on small screens */}
      <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
        <figure className='rounded-l-lg'>
          <img src={signup} alt="" className='w-full rounded-l-lg'/>
        </figure>
      </div>
      <div className='lg:pl-4 sm:px-4 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className='text-primaryColor'> Account</span>
            </h3>
            <form onSubmit={submitHandler}>
            <div className="mb-5">
            <input type="text"
             placeholder="Full Name"
              name="name"
               value={formData.name}
               onChange={handleInputChange}
               className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
               placeholder:text-textColor rounded-md cursor-pointer"
               required
               ></input>
          </div>
          <div className="mb-5">
            <input type="email"
             placeholder="Enter your email"
              name="email"
               value={formData.email}
               onChange={handleInputChange}
               className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
               placeholder:text-textColor rounded-md cursor-pointer"
               required
               ></input>
          </div>
          <div className="mb-5">
            <input type="password"
             placeholder="Type your password"
              name="password"
               value={formData.password}
               onChange={handleInputChange}
               className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[22px] leading-7 text-headingColor
               placeholder:text-textColor rounded-md cursor-pointer"
               required
               ></input>
          </div>

          <div className='mb-5 flex items-center justify-between'>
            <label  className='text-headingColor font-bold text-[16px] leading-7'>
              Are you a:
              <select name='role' value={formData.role} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3
              focus:outline-none'>
                <option value=''>Select</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="tester">Tester</option>
                <option value="tester">Alien</option>
              </select>

            </label>

            <label  className='text-headingColor font-bold text-[16px] leading-7'>
              Gender:
              <select name='gender' value={formData.gender} onChange={handleInputChange} className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3
              focus:outline-none'>
                <option value=''>Select</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>

            </label>

          </div>
            
          <div className="mt-7">
            <button
             disabled={loading  && true}
             type="submit"
             className="w-full rounded-lg
              bg-primaryColor
               text-white text-[18px]
                leading-[30px] px-4 py-3">
                 {loading?( <HashLoader size={35} color='#fffff'/>):('Sing Up')} 
                  </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Do you already have an account?<Link to='/login' className="text-primaryColor">Login</Link>
          </p>

           
            </form>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Signup
