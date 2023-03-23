
import jwt from 'jsonwebtoken'


export const createToken=(adminId)=>{

    return jwt.sign({adminId},process.env.SECRET,{
        expiresIn: '12h'
    })

}

