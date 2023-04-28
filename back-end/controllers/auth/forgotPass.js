import adminModel from "../../models/adminModel.js";
import otpGenerator from "otp-generator";
import otpModel from "../../models/otpModel.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export const forgotPass = async (req, res) => {
  try {
    const admin = await adminModel.findOne({ email: req.body.Email });
    if (admin) {
      res.status(200).json({ success: true });

      const randomOtp = otpGenerator.generate(5, {
        digits: true,
        lowerCaseAlphabets: false,
        specialChars: false,
        upperCaseAlphabets: false,
      });
      console.log(randomOtp);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL,
        to: admin.email,
        subject: "Hi from quiz app",
        text: "your otp is:" + randomOtp,
      };

      new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            reject(err);
          } else {
            resolve(info);
          }
        });
      })
        .then(async (info) => {
          const hashOtp = await bcrypt.hash(randomOtp, 10);
          const Otp = await otpModel.create({
            otp: hashOtp,
            email: admin.email,
          });
          console.log("Email sent: " + info.response);
          resolve(info);
        })
        .catch((err) => {
          res
            .status(401)
            .json({ success: false, message: "Sorry,there is an error!" });
          reject(err);
        });
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
