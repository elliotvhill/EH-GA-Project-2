const { Venue, Concert, Artist } = require('./models')
const venueSchema = require('./models/venue')
const concertSchema = require('./models/concert')
const artistSchema = require('./models/artist')

// VENUES
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
const getVenueByName = async (req, res) => {
    try {
        const { id } = req.params
        const venueName = await Venue.findOne({ venue_name: `${id}` })
        if (venueName) {
            return res.status(200).json(venueName)
        }
        return res.status(404).send('No venue by that name')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const createVenue = async (req, res) => {
    try {
        const venue = await new Venue(req.body)
        await venue.save()
        return res.status(201).json({ venue })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const updateVenue = async (req, res) => {
    try {
        const { id } = req.params
        const venue = await Venue.findByIdAndUpdate(id, req.body, { new: true })
        if (venue) {
            return res.status(200).json(venue)
        }
        throw new Error('Venue not found')
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const deleteVenue = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Venue.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Venue deleted')
        }
        throw new Error('Venue not found. Could not delete.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// CONCERTS
const getConcerts = async (req, res) => {
    try {
        const concerts = await Concert.find({})
        return res.status(200).json({ concerts })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const getConcertById = async (req, res) => {
    try {
        const { id } = req.params
        const concert = await Concert.findById(id)
        if (concert) {
            return res.status(200).json({ concert })
        }
        return res.status(404).send('Concert not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// ARTISTS
const getArtists = async (req, res) => {
    try {
        const artists = await Artist.find({})
        return res.status(200).json({ artists })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const getArtistById = async (req, res) => {
    try {
        const { id } = req.params
        const artist = await Artist.findById(id)
        if (artist) {
            return res.status(200).json(artist)
        }
        return res.status(404).send('Artist not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getVenues,
    getVenueById,
    getVenueByName,
    createVenue,
    updateVenue,
    deleteVenue,
    getConcerts,
    getConcertById,
    getArtists,
    getArtistById
}