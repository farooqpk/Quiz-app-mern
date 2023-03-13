import jwt from 'jsonwebtoken'


export const verifyToken = (req,res,next)=>{

    const token=req.cookies.jwt
    if (token){
        jwt.verify(token,process.env.SECRET,(err,tokenDecoded)=>{
            if(err){
                console.log(err);
                return false
            }else{
                next()
            }
        })
    }else{
        return false
    }

}