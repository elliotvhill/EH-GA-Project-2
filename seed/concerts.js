const db = require('../db')
const { Venue, Concert } = require('../models')
db.on("error", console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const venues = await Venue.find({})
    const venue_names = [
        'Forest Hills Stadium',
        'Seaside Park',
        'The Met Philadelphia',
        'Westville Music Bowl'
    ]
    const concerts = [
        {
            concert_day: 'Oct 6, 2017',
            lineup: ['Daughter', 'The National'],
            attendees: undefined,
            guests: ['Luke Hill'],
            ticket_price: undefined,
            venue_id: venue_names[0],
        },
        {
            concert_day: 'Sep 29, 2018',
            lineup: ['The National'],
            attendees: undefined,
            guests: ['Luke Hill', 'Janelle Hill'],
            ticket_price: undefined,
            venue_id: venue_names[0],
        },
        {
            concert_day: 'Sep 30, 2018',
            lineup: ['The National'],
            attendees: undefined,
            guests: ['Luke Hill'],
            ticket_price: undefined,
            venue_id: venue_names[0],
        },
        {
            concert_day: 'Sep 25, 2022',
            lineup: ['The National'],
            attendees: undefined,
            guests: ['Grant Hale'],
            ticket_price: 349,
            venue_id: venue_names[1],
        },
        {
            concert_day: 'Aug 2, 2023',
            lineup: ['The National', 'The Beths'],
            attendees: undefined,
            guests: ['Grant Hale', 'Luke Hill', 'Isabella Ness'],
            ticket_price: undefined,
            venue_id: venue_names[2],
        },
        {
            concert_day: 'Aug 3, 2023',
            lineup: ['The National', 'The Beths'],
            attendees: undefined,
            guests: ['Grant Hale'],
            ticket_price: 60,
            venue_id: venue_names[3],
        },
        { timestamps: true }
    ]
    await Concert.deleteMany()
    await Concert.insertMany(concerts)
    console.log('Created concerts')
}

const run = async () => {
    await main()
    db.close()
}
run()