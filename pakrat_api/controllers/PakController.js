const { Pak, Item } = require('../models')


const ReadPak = async (req, res) => {
    //PATH: /api/pak/read/:pakId
    try {

        let pakWithItems = await Pak.findByPk(req.params.pakId, 
            {
            include: [{ model: Item, as: 'pakItems' }]
        })
        res.send(pakWithItems)

    } catch (error) {
        console.log('ReadPak controller error')
        throw error
    }
}

const CreatePak = async (req, res) => {
    //PATH: /api/pak/create_new_pak/:userId
    try {
        let userId = parseInt(req.params.userId)
        let newBody = {userId, ...req.body}
        let newPak = await Pak.create(newBody)
        res.write(JSON.stringify(newPak))

        let pakId = newPak.dataValues.id
        req.body.pakItems.map(async (x) => {
            try {
            let newItemBody = {pakId, ...x}
            let newItem = await Item.create(newItemBody)
            res.write(JSON.stringify(newItem))
            } catch (error) {
                throw error
            }
        })

        res.end()

    } catch (error) {
        console.log('CreatePak controller error')
        throw error
    }
}

module.exports = {
    ReadPak,
    CreatePak
}