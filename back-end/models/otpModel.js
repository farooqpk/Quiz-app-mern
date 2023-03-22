import mongoose from "mongoose";


const otpSchema= mongoose.Schema({
    otp:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:String,
    }
})
  

export default mongoose.model('Otp',otpSchema)