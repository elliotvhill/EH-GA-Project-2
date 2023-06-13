const { Artist } = require('../models')
const artistSchema = require('../models/artist')

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
    getArtists,
    getArtistById
}