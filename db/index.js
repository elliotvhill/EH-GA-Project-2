const mongoose = require("mongoose")
mongoose
  .connect("mongodb+srv://elliotvh:VbJBD32N1boGe5O3@saddads.tys81lo.mongodb.net/?retryWrites=true&w=majority")
  // .connect("mongodb://127.0.0.1:27017/dadsDatabase")
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
// const uri = "mongodb+srv://elliotvh:VbJBD32N1boGe5O3@saddads.tys81lo.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("saddads").collection("concerts");
//   // perform actions on the collection object
//   client.close();
// });