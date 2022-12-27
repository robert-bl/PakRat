const Router = require('express').Router()
const controller = require('../controllers/PakController')

Router.get('/read/:pakId', controller.ReadPak)
Router.post('/create_new_pak/:userId', controller.CreatePak)

module.exports = Router