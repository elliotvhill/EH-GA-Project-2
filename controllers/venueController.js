const { Venue } = require('../models')
const venueSchema = require('../models/venue')

const getVenues = async (req, res) => {
    try {
        const venues = await Venue.find({})
        return res.status(200).json({ venues })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getVenues
}