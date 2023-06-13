const Router = require('express').Router()
const controller = require('../controller')

Router.get('/venues', controller.getVenues)
Router.get('/venues/:id', controller.getVenueById)

module.exports = Router