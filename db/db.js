const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  const con = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  });
  console.log(
    colors.cyan.underline(`MongoDB connected ${con.connection.host}`)
  );
};

module.exports = connectDB;
