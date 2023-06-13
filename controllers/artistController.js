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

module.exports = {
    getArtists
}