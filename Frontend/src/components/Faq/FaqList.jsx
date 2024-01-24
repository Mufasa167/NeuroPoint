import {faqs} from "../../assets/Data/faq.js"
import FaqItem from "./FaqItem.jsx"

const FaqList = () => {
  return (
    <div>
      <ul className="'mt-[38px]">
        {faqs.map((item,index)=><FaqItem item={item} key={index}/>)}
      </ul>
    </div>
  )
}

export default FaqList
