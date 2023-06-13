const Router = require('express').Router()
const controller = require('../controller')

Router.get('/artists', controller.getArtists)
Router.get('/artists/:id', controller.getArtistById)

module.exports = Router