const Router = require('express').Router()
const controller = require('../controllers/PakController')

Router.get('/read/:pakId', controller.ReadPak)
Router.get('/get_paks/:user_id', controller.GetUserPaks)
Router.post('/create_new_pak', controller.CreatePak)

module.exports = Router