const Router = require('express').Router()
const controller = require('../controller')

Router.get('/artists', controller.getArtists)
Router.get('/artists/:id', controller.getArtistById)
Router.post('/artists', controller.createArtist)
Router.put('/artists', controller.updateArtist)
// Router.delete('/artists/:id', controller.deleteArtist)

module.exports = Router