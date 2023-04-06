import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

adminSchema.statics.loginCheck = async function (Email, Password) {
  const admin = await this.findOne({ email: Email });
  if (admin) {
    const result = await bcrypt.compare(Password, admin.password);
    if (result === true) {
      return admin;
    }
  }
  // Either the provided email is not associated with an admin or the password is incorrect
  return null;
};

export default mongoose.model("admin", adminSchema);
