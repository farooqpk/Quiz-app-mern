import { createToken } from "../../middlewares/createToken.js";
import adminModel from "../../models/adminModel.js";

export const loginPost = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const admin = await adminModel.loginCheck(Email, Password);
    if (!admin) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    } else {
      const token = createToken(admin._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 48 * 60 * 60 * 1000,
        path: '/'
      });
      res.status(201).json(true);
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "An error occurred during login" });

  }
};
