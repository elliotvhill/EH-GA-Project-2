const mongoose = require("mongoose")
const URI = process.env.DB_URI_PROD
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

// import mongodb from 'mongodb';

// const MongoClient = mongodb.MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("saddads").collection("concerts");
//   // perform actions on the collection object
//   client.close();
// });