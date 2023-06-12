const db = require('../db')
const { Venue, Concert, Artist } = require('../models')
db.on("error", console.error.bind(console, 'MongoDB connection error:'))

const main = async (req, res) => {
    const concerts = await Concert.find({})
    const venues = await Venue.find({})
    const artists = [
        {
            artist: 'The National',
            isHeadliner: true,
            image: `/images/Matt-Berninger-All-Points-East-Aug-2022.jpeg`,
        },
        {
            artist: 'Daughter',
            isHeadliner: false,
            image: `https://www.icmp.ac.uk/sites/default/files/styles/news_details/public/daughter-band_0.jpg?itok=AE3gFS0U`,
        },
        {
            artist: 'The Beths',
            isHeadliner: false,
            image: `https://www.flickr.com/photos/davidjlee/52697057674/`,
        },
        {
            artist: 'Patti Smith',
            isHeadliner: false,
            image: `https://upload.wikimedia.org/wikipedia/commons/5/55/Patti_Smith%2C_1978.jpg`,
        },
        { timestamps: true }
    ]
    await Artist.deleteMany()
    await Artist.insertMany(artists)
}




