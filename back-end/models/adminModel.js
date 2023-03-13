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
    } else {
      throw Error("incorrect password");
    }
  } else {
    throw Error("admin not exist");
  }
};

export default mongoose.model("admin", adminSchema);
