
import jwt from 'jsonwebtoken'


export const createToken=(adminId)=>{

    return jwt.sign({adminId},process.env.SECRET,{
        expiresIn: '12h'
    })

}

export const CreateResetPassToken=(otpId)=>{

    return jwt.sign({otpId},process.env.SECRET,{
        expiresIn:'1h'
    })
}