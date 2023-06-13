const Router = require('express').Router()
const controller = require('../controller')

Router.get('/concerts', controller.getConcerts)
Router.post('/concerts', controller.createConcert)
Router.put('/concerts/:id', controller.updateConcert)
Router.delete('/concerts/:id', controller.deleteConcert)
Router.get('/concerts/:id', controller.getConcertById)

module.exports = Router