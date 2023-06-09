const { Schema } = require('mongoose')
const venueSchema = new Schema(
    {
        venue_name: { type: String, required: true },
        location: { type: String, required: true },
        capacity: { type: Number, required: false },
        url: { type: String, required: true },
        description: { type: String, required: false }
    },
    { timestamps: true }
)

module.exports = venueSchema