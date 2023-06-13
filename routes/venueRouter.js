const Router = require('express').Router()
const controller = require('../controller')

Router.get('/venues', controller.getVenues)
Router.post('/venues', controller.createVenue)
Router.put('/venues/:id', controller.updateVenue)
Router.delete('/venues/:id', controller.deleteVenue)
Router.get('/venues/:id', controller.getVenueById)

module.exports = Router