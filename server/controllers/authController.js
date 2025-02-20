import bcrypt from "bcryptjs";
import AuthSchema from "../models/AuthModel.js";

export const createLogin = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({
      success: false,
      message: "Please provide email and password",
    });
  }

  try {
    const existUser = await AuthSchema.findOne({ email });
    if (existUser) {
      return res
        .status(400)
        .json({ success: false, message: "User Already exists!" });
    }
    const bcryptPassword = await bcrypt.hash(password, 10);
    const user = new AuthSchema({ name, email, password: bcryptPassword });
    await user.save();
    res.status(201).json({
      success: true,
      message: "User saved successfully",
    });
  } catch (error) {
    console.log("please check error", error.message);
    res.status(500).json({
      success: false,
      message: "Please check something went wrong",
    });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
   return res.status(400).json({
      success: false,
      message: "Please enter email and password",
    });
  }

  //Check if the user already exists
  try {
    const existUser = await AuthSchema.findOne({ email });
    if (!existUser) {
      return res.status(400).json({
        success: false,
        message: "User not availble, Please register",
      });
    }

    //compare password
    const comparePassword =await bcrypt.compare(password, existUser.password);

    if (!comparePassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password 😭"
      })
    }
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `something went wrong ${error.message}`,
    });
  }
};
