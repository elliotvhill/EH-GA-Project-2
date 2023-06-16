const { Schema } = require("mongoose")
const artistSchema = new Schema(
  {
    artist: { type: String, required: true },
    isHeadliner: { type: Boolean },
    image: { type: String },
  },
  { timestamps: true }
)
module.exports = artistSchema