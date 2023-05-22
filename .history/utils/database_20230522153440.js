import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("strictQuery", true);
};
