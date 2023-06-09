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
            image: '',
        },
        {
            artist: ,
            isHeadliner: false,
            image: '',
        },
        {
            artist: ,
            isHeadliner: ,
            image: ,
        },
        { timestamps: true }
    ]
    await Artist.deleteMany()
    await Artist.insertMany(artists)
}




// ----------- SET LISTS ------------ //

// OCT 6 2017 FOREST HILLS:

// Nobody Else Will Be There
// The System Only Dreams in Total Darkness
// Walk It Back
// Guilty Party
// Don't Swallow the Cap
// Afraid of Everyone
// Dark Side of the Gym
// I'll Still Destroy You
// Turtleneck
// I Need My Girl
// Secret Meeting
// Conversation 16
// Slow Show
// Apartment Story
// Carin at the Liquor Store
// Bloodbuzz Ohio
// Day I Die
// Fake Empire
// About Today
// ENCORE -------
// Pink Rabbits
// The KKK Took My Baby Away  
// Mr. November
// Terrible Love
// Vanderlyle Crybaby Geeks


// SEP 29 2018 FOREST HILLS

// SEP 30 2018 FOREST HILLS

// SEP 25 SOUND ON SOUND

