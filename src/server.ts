import mongoose from "mongoose";
import app from "./app";

const dbConnection = async () => {
  const port = 5000;
  try {
    await mongoose.connect();
    console.log("Database Connected Successfully");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connected database", error);
  }
};

dbConnection();
