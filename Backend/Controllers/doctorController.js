import Doctor from "../Models/DoctorSchema.js"


export const updateDoctor =async(req,res)=>{
    const id=req.params.id
    try {
        const updatedDoctor= await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true})

        res.status(200).json({success:true, message:"Succesfully Updated", data:updatedDoctor})
    } catch (error) {
        res.status(500).json({success:false, message:"Failed to Update"})
    }
}



export const deleteDoctor =async(req,res)=>{
    const id=req.params.id
    try {
         await Doctor.findByIdAndDelete(id)

        res.status(200).json({success:true, message:"Succesfully deleted"})
    } catch (error) {
        res.status(500).json({success:false, message:"Failed to Delete"})
    }
}



export const getSingleDoctor =async(req,res)=>{
    const id=req.params.id
    try {
        const doctor= await Doctor.findById(id).select('-password')

        res.status(200).json({success:true, message:"Doctor Found", data:doctor})
    } catch (error) {
        res.status(404).json({success:false, message:"No doctor found!"})
    }
}


export const getAllDoctors =async(req,res)=>{
    
    try {
        const doctors= await Doctor.find({}).select('-password')

        res.status(200).json({success:true, message:"Doctors Found", data:doctors})
    } catch (error) {
        res.status(404).json({success:false, message:"Not found!"})
    }
}
