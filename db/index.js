const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
const MONGO_URL = process.env.MONGO_URL
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB")
  })
  .catch((error) => {
    console.error("connection error", error.message)
  })
mongoose.set("debug", true)
const db = mongoose.connection
module.exports = db