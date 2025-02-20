import mongoose from "mongoose";

const AuthModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AuthSchema = mongoose.model("Auth", AuthModel);

export default AuthSchema;
