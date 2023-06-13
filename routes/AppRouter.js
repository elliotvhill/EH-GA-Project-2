const express = require('express')
const Router = express.Router()
const ArtistRouter = require('./artistRouter')
const VenueRouter = require('./venueRouter')
const ConcertRouter = require('./concertRouter')

// venues
Router.get('/venues', VenueRouter)
Router.post('/venues', VenueRouter)
Router.put('/venues/:id', VenueRouter)
Router.delete('/venues/:id', VenueRouter)
Router.get('/venues/:id', VenueRouter)
// concerts
Router.get('/concerts', ConcertRouter)
Router.get('/concerts/:id', ConcertRouter)
// artists
Router.get('/artists', ArtistRouter)
Router.post('/artists', ArtistRouter)
Router.get('/artists/:id', ArtistRouter)
Router.put('/artists/:id', ArtistRouter)
Router.delete('/artists/:id', ArtistRouter)

module.exports = Router