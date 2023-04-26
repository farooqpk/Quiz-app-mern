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
      
      res.header("Access-Control-Allow-Credentials", true);
      res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 48 * 60 * 60 * 1000,
        path: '/'
      });
      // res.cookie("jwt", token, {
      //   httpOnly: true,
      //   secure: true,
      //   sameSite: "none",
      //   maxAge: 48 * 60 * 60 * 1000,
      //   domain: process.env.SUBDOMAIN,
      //   path: "/",
      // });
      res.status(201).json(true);
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "An error occurred during login" });
  }
};
