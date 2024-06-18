const mongoose = require("mongoose");

const connect = async () => {
  console.log(process.env.DB_URL);
  try {
    await mongoose.connect(process.env.DB_URL, {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

module.exports = connect;
