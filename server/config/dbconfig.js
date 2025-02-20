import mongoose from "mongoose";

const DBConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected successfully `, conn.connection.host);
  } catch (error) {
    console.log("Something went wrong", error.message);
    process.exit(1);
  }
};

export default DBConnect;
