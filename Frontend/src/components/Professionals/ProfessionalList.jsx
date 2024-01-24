import { professionals } from '../../assets/Data/professionals'
import ProfessionalCard from './ProfessionalCard'

const ProfessionalList = () => {
  return (
    <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 gap-5 lg:gap-[30px] mt-[30px] 
    lg:mt-[55px]'>
    {professionals.map((professional)=><ProfessionalCard key={professional.id} professional={professional}/>)}
    </div>
  )
}

export default ProfessionalList
