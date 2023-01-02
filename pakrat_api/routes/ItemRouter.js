const Router = require('express').Router()
const controller = require('../controllers/ItemController')

Router.delete('/delete/:id', controller.DeleteItems)
Router.put('/update', controller.UpdateItems)
Router.post('/create', controller.CreateItems)

module.exports = Router