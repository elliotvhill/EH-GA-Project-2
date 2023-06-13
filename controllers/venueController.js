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

const getVenueById = async (req, res) => {
    try {
        const { id } = req.params
        const venue = await Venue.findById(id)
        if (venue) {
            return res.status(200).json({ venue })
        }
        return res.status(404).send('Venue not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getVenues,
    getVenueById
}