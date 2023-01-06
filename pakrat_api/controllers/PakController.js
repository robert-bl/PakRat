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

const GetUserPaks = async (req, res) => {
    //PATH: /api/pak/get_paks/user_id
    try {
        console.log(req.params.user_id)
        let user_id = (req.params.user_id)
        let userPaks = await Pak.findAll(
            {where:{userId: user_id}}
        )
        res.send(userPaks)
    } catch (error) {
        throw error
    }
}

const CreatePak = async (req, res) => {
    //PATH: /api/pak/create_new_pak
    try {
        // let userId = parseInt(req.params.userId)
        // let newBody = {userId, ...req.body}
        let newPak = await Pak.create(req.body)
        console.log(newPak)
        res.send(newPak)

        // let pakId = newPak.dataValues.id
        // req.body.pakItems.map(async (x) => {
        //     try {
        //     let newItemBody = {pakId, ...x}
        //     let newItem = await Item.create(newItemBody)
        //     res.write(JSON.stringify(newItem))
        //     } catch (error) {
        //         throw error
        //     }
        // })

        // res.end()

    } catch (error) {
        console.log('CreatePak controller error')
        throw error
    }
}

module.exports = {
    ReadPak,
    CreatePak,
    GetUserPaks
}