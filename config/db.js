require('dotenv').config()
const mongoose = require('mongoose');

const connectDB =  () => {
  const conn =  mongoose.connect(process.env.DB);
  console.log('database is connected');

};

module.exports = connectDB;