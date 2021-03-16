const express = require('express')

const routes = express.Router()

const TheaterController = require('../controllers/theaterController')

routes.get('/', TheaterController.readAll)
routes.get('/:id', TheaterController.readOne)
routes.post('/', TheaterController.create)
routes.put('/:id', TheaterController.update)
routes.delete('/:id', TheaterController.delete)

module.exports = routes