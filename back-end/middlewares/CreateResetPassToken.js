import jwt from 'jsonwebtoken'
export const CreateResetPassToken=(otpId)=>{

    return jwt.sign({otpId},process.env.SECRET,{
        expiresIn:'1h'
    })
}