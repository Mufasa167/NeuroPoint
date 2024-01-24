import { AiFillStar } from "react-icons/ai"
import  userImg from"../../assets/Images/userImg.png"
import { formateDate } from "../../utils/formateDate"
import { useState } from "react"
import FeedbackForm from "./FeedbackForm"

const Feedback = () => {

    const [showFeedbackForm, setShowFeedbackForm]=useState(false)
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">All reviews (202)</h4>
        <div className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
                <figure className="w-10 h-10 rounded-full">
                    <img className="w-full" src={userImg} alt=""/>
                </figure>
           <div>
               <h5 className="text-[16px] leading-6 text-primaryColor font-bold">Mustafa Kaddan</h5>
               <p className="text-[14px] leading-6 text-textColor">{formateDate('01-24-2024')}</p>
               <p className="text__para text-textColor mt-3 font-medium text-[15px]>">Wow this damn project made me rethink my descisions, oh! and great doctor and service!!</p>
           </div>

            </div>

            <div className="flex gap-1">
                {[...Array(5).keys()].map((_,index)=><AiFillStar key={index} color="#0067FF"/>)}
            </div>
        </div>
      </div>
        
        {!showFeedbackForm&& (
        <div className="text-center">
            <button className="btn" onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
        </div>
        )}

        {showFeedbackForm && <FeedbackForm/>}
    </div>
  )
}

export default Feedback
