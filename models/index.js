const mongoose = require('mongoose')
const venueSchema = require('./venue')

const Venue = mongoose.model('Venue', venueSchema)

module.exports = {
    Venue
}