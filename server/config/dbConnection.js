import mongoose from "mongoose";

const dbConnection = async (DB_URL) => {
  try {
    await mongoose.connect(DB_URL);
    console.log("database  connection successful 🟢");
  } catch (error) {
    console.log("data base connection error🔴", error.message);
  }
};


 export default   dbConnection;