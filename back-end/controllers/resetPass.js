import adminModel from "../models/adminModel.js";
import bcrypt from "bcrypt";

export const resetPass = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
   
    const admin = await adminModel.updateOne(
      { email: req.body.email },
      {
        $set: { password: hashPassword },
      }
    );
    

    res.status(200).json(true);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "there is an error, try again" });
  }
};
