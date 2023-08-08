const mongoose = require("mongoose")
const URI = process.env.MONGO_URL
mongoose
  .connect(`${URI}`)
  .then(() => {
    console.log("Successfully connected to MongoDB")
  })
  .catch((error) => {
    console.error("connection error", error.message)
  })
mongoose.set("debug", true)
const db = mongoose.connection
module.exports = db