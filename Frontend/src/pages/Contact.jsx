import React from 'react'
import App from "../components/Spline/Spline.jsx"
import ContactForm from '../components/ContactForm/ContactForm.jsx'
const Contact = () => {
  return (
    <div>
        <div className="ml-auto"><App/></div>
    
      <div className='mr-auto'>
        <ContactForm/></div>
      
        </div>
  )
}

export default Contact
