import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = mongoose.Schema({
  Email: {
    type: String,
    required: true,
    lowercase: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

adminSchema.statics.loginCheck = async function (Email, Password) {
  const admin = await this.findOne({ Email });

  if (admin) {
    const result = await bcrypt.compare(Password, admin.Password);

    if (result) {
      return admin;
    }
  }
  // Either the provided email is not associated with an admin or the password is incorrect
  return null;
};

export default mongoose.model("admin", adminSchema);
