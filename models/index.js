const mongoose = require('mongoose')
const venueSchema = require('./venue')
const concertSchema = require('./concert')

const Venue = mongoose.model('Venue', venueSchema)
const Concert = mongoose.model('Concert', concertSchema)

module.exports = {
    Venue,
    Concert
}