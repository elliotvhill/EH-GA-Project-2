const { Concert } = require('../models')
const concertSchema = require('../models/concert')

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

module.exports = {
    getConcerts,
    getConcertById
}