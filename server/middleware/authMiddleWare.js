import jwt from "jsonwebtoken";

const authMiddleWare = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).send({ success: false, message: "Invalid Token !" });
  }

  try {
    const decoded = jwt.verify(token, process.env.AUTH_JWT_SECRET_KEY);
    res.user = decoded;

    next();
  } catch (error) {
    return res.status(400).send({ success: false, message: error.message });
  }
};

export default authMiddleWare;
