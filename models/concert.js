const { Schema } = require('mongoose')
const concertSchema = new Schema(
    {
        concert_day: { type: String },
        lineup: { type: Array, required: true },
        attendees: { type: Number },
        guests: { type: Array },
        ticket_price: { type: Number },
        venue_id: { type: Array },
        set_list: { type: Array, required: true },
        album_tour: { type: Array, required: true },
    },
    { timestamps: true }
)

module.exports = concertSchema