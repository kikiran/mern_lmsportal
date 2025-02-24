import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const AuthModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
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

AuthModel.methods.getJWT = async function () {
  const token = await jwt.sign(
    { id: this._id },
    process.env.AUTH_JWT_SECRET_KEY
  );
  return token;
};

const AuthSchema = mongoose.model("User", AuthModel);

export default AuthSchema;
