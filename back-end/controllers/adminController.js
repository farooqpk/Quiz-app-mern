import { createToken } from "../middlewares/createToken.js";
import adminModel from "../models/adminModel.js";

export const loginPost = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const admin = await adminModel.loginCheck(Email, Password);
    const token = createToken(admin._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 1000,
    }); 
    res.status(201).json(true);
  } catch (error) {
    console.log(error);
  }
};
