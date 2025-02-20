import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import DBConnect from "./config/dbconfig.js";
dotenv.config();
const port = process.env.PORT || 8089;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", authRoutes);

app.listen(port, () => {
  DBConnect();
  console.log("Port is ready at ", port);
});
