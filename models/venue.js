const { Schema } = require("mongoose")
const venueSchema = new Schema(
  {
    venue_name: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: Number },
    url: { type: String, required: true },
    description: { type: String },
    image: { type: String },
  },
  { timestamps: true }
)
module.exports = venueSchema