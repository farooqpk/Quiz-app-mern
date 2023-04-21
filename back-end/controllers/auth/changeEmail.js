import adminModel from "../../models/adminModel.js";

export const changeEmail = async (req, res) => {
  try {
    const isEmailExist = await adminModel.findOne({
      email: req.body.currentEmail,
    });
    if (isEmailExist) {
      const updateEmail = await adminModel.updateOne(
        { email: isEmailExist.email },
        { $set: { email: req.body.newEmail } }
      );
      if (updateEmail) {
        res.status(200).json(true);
      } else {
        res
          .status(401)
          .json({ success: false, message: "sorry,check your email" });
      }
    } else {
      res
        .status(401)
        .json({ success: false, message: "current email doesnt exist!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Sorry an error occurred" });
  }
};
