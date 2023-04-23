import bcrypt from "bcrypt";
import adminModel from "../../models/adminModel.js";

export const changePass = async (req, res) => {
  try {
    const admin = await adminModel.findById(req.adminId);
    const isCurrentPassExist = await bcrypt.compare(
      req.body.currentPass,
      admin.password
    );
    if (isCurrentPassExist) {
      const hashNewPass = await bcrypt.hash(req.body.newPass, 10);
      const updatePass = await adminModel.findByIdAndUpdate(
        { _id: req.adminId },
        { $set: { password: hashNewPass } }
      );
      res.status(200).json(true);
    } else {
      res
        .status(401)
        .json({ success: false, message: "Current pass doesnt exist!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "sorry there is an error" });
  }
};
