const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PakRouter = require('./PakRouter')
const ItemRouter = require('./ItemRouter')

Router.use('/user', UserRouter)
Router.use('/pak', PakRouter)
Router.use('/item', ItemRouter)

module.exports = Router