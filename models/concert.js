const { Schema } = require('mongoose')
const concertSchema = new Schema(
    {
        date: { type: String, required: true },
        lineup: { type: Array, required: true },
        attendees: { type: Number, required: true },
        guests: { type: Array, required: true },
        ticket_price: { type: Number, required: true }
    },
    { timestamps: true }
)

module.exports = concertSchema