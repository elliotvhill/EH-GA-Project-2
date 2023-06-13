const Router = require('express').Router()
const controller = require('../controller')

Router.get('/concerts', controller.getConcerts)
Router.get('/concerts/:id', controller.getConcertById)

module.exports = Router