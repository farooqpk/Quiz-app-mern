import adminModel from "../models/adminModel.js";
import otpGenerator from "otp-generator";
import otpModel from "../models/otpModel.js";
import bcrypt from "bcrypt";

export const forgotPass = async (req, res) => {
  try {
    const admin = await adminModel.findOne({ Email: req.body.Email });

    if (admin) {
      const randomOtp = otpGenerator.generate(5, {
        digits: true,
        lowerCaseAlphabets: false,
        specialChars: false,
        upperCaseAlphabets: false,
      });

      const hashOtp = await bcrypt.hash(randomOtp, 10);
      const Otp = await otpModel.create({ otp: hashOtp });

      console.log(Otp);
    } else {
      res
        .status(401)
        .json({ success: false, message: "Sorry,email doesnt exist!" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Sorry,please try again!" });
  }
};
