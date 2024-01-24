import Home from '../pages/Home'
import Service from '../pages/Service'
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Contact from "../pages/Contact"
import Doctors from "../pages/Doctor/Doctors"
// import Tester from '../pages/Doctor/Tester'
import DoctorDetail from "../pages/Doctor/DoctorDetails"

import {Routes, Route} from 'react-router-dom' 
const Routers = () => {
  return (
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/professionals' element={<Doctors/>}/>
    {/* <Route path='/testers' element={<Tester/>}/> */}

    <Route path='/professionalsDetail' element={<DoctorDetail/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/service' element={<Service/>}/>
    
   </Routes>
  )
}

export default Routers
