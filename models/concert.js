const { Schema } = require("mongoose")
const concertSchema = new Schema(
  {
    concert_day: { type: String },
    lineup: { type: Array, required: true },
    attendees: { type: Number },
    guests: { type: Array },
    ticket_price: { type: Number },
    venue_id: { type: Schema.Types.ObjectId, ref: 'Venue' },
    set_list: { type: Array },
    album_tour: { type: Array },
  },
  { timestamps: true }
)
module.exports = concertSchema