import mongoose from "mongoose";

const isConnected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
  }
};
