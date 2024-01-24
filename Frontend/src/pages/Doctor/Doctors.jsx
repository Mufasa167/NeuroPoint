import ProfessionalCard from "../../components/Professionals/ProfessionalCard"
import { professionals } from "../../assets/Data/professionals"
const Doctors = () => {
  return (
    <>
   <section className="bg-[#D6EAF8]">
    <div className="container text-center">
      <h2 className="heading">Find a Professional</h2>
      <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
        <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none
        cursor-pointer placeholder:text-textColor" placeholder="Search for a Clincian/Tester"/>
        <button className="btn mt-0 rounded-[0px] rounded-r-md" >Search</button>
      </div>
    </div>

   </section>
    
    <section>
      <div className="container">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-4 lg:gap-5'>
       {professionals.map((professional)=><ProfessionalCard key={professional.id} professional={professional}/>)}
    </div>
      </div>
    </section>
    </>
  )
}

export default Doctors
