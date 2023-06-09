const mongoose = require('mongoose')
const venueSchema = require('./venue')
const concertSchema = require('./concert')
const artistSchema = require('./artist')

const Venue = mongoose.model('Venue', venueSchema)
const Concert = mongoose.model('Concert', concertSchema)
const Artist = mongoose.model('Artist', artistSchema)

module.exports = {
    Venue,
    Concert,
    Artist
}