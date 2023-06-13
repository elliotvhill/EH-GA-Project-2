const express = require('express')
const Router = express.Router()
const ArtistRouter = require('./artistRouter')
const VenueRouter = require('./venueRouter')
const ConcertRouter = require('./concertRouter')

Router.get('/venues', VenueRouter)
Router.get('/venues/:id', VenueRouter)
Router.get('/concerts', ConcertRouter)
Router.get('/concerts/:id', ConcertRouter)
Router.get('/artists', ArtistRouter)
Router.get('/artists/:id', ArtistRouter)
Router.post('/artists', ArtistRouter)
Router.put('/artists/:id', ArtistRouter)

module.exports = Router