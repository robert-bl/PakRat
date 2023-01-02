const Router = require('express').Router()
const controller = require('../controllers/ItemController')

Router.delete('/delete/:id', controller.DeleteItems)
Router.put('/update', controller.UpdateItems)

module.exports = Router