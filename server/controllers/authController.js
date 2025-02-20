import AuthSchema from "../models/AuthModel.js";

export const createLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "Please provide email and password",
    });
  }
  const user = new AuthSchema(req.body);

  try {
    await user.save();
    res.status(201).json({
      success: true,
      message: "User saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please check something went wrong",
    });
  }
};
