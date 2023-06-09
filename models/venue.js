const { Schema } = require('mongoose')
const venueSchema = new Schema(
    {
        venue_name: { type: String, required: true },
        location: { type: String, required: true },
        capacity: { type: Number, required: true },
        url: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = venueSchema