const express = require('express')
const Router = express.Router()
const ArtistRouter = require('./artistRouter')

Router.get('/artists', ArtistRouter)
Router.get('/artists/:id', ArtistRouter)

module.exports = Router