import mongoose, { mongo } from "mongoose";


const otpSchema= mongoose.Schema({
    otp:{
        required:true,
        type:String,
    }
})
  

export default mongoose.model('Otp',otpSchema)