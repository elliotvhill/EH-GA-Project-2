const Router = require('express').Router()
const controller = require('../controller')

Router.get('/artists', controller.getArtists)
Router.post('/artists/', controller.createArtist)
Router.put('/artists/:id', controller.updateArtist)
Router.delete('/artists/:id', controller.deleteArtist)
Router.get('/artists/:id', controller.getArtistById)

module.exports = Router