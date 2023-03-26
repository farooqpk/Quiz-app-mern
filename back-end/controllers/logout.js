
export const logout=(req,res)=>{

    try {
        res.cookie('jwt', '', { maxAge: 1 })
        
    } catch (error) {
        res.status(500).json({success:false,message:'sorry there is an error'})
    }
    
}