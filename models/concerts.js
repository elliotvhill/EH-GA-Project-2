const { Schema } = require('mongoose')
const concertSchema = new Schema(
    {
        date: { type: String, required: true },
        lineup: { type: Array, required: true },
        attendees: { type: String, required: true }, // might be actual concert attendance (number) OR user's personal companions (string)
        ticket_price: { type: Number, required: true }
    },
    { timestamps: true }
)

module.exports = concertSchema