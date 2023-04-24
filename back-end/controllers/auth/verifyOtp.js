import otpModel from "../../models/otpModel.js";
import bcrypt from "bcrypt";
import { CreateResetPassToken } from "../../middlewares/CreateResetPassToken.js";


export const verifyOtp = async (req, res) => {
  try {
    
    const Otp = await otpModel.findOne({ email: req.body.Email });
    const isMatch = await bcrypt.compare(req.body.otp, Otp.otp);
   
    if (!isMatch) {
      res.status(401).json({ success: false, message: "otp is incorrect!" });
    } else {
      await otpModel.deleteOne({ email: Otp.email });
      const token = CreateResetPassToken(Otp.id);
      // res.cookie("ResetToken", token, {
      //   httpOnly: true,
      //   maxAge: 1 * 60 * 60 * 1000,
      //   path: '/'
      // });
      res.cookie("ResetToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 1 * 60 * 60 * 1000,
        domain: process.env.SERVER_SUBDOMAIN,
        path: '/'
      })

      res.status(200).json(true);
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "sorry there is an error!" });
  }
};
