const { Item } = require('../models')

const DeleteItems = async (req, res) => {
    //PATH: /api/item/delete/:id
    try {
        let itemId = (req.params.id)
        await Item.destroy({where:{id: itemId}})
        res.send({message: `Deleted item ${itemId}`})
    } catch (error) {
        throw error
    }

}

const UpdateItems = async (req, res) => {
    //PATH: /api/item/update
        req.body.items.forEach(async (updatedBody) => {
            try {
            let updatedItem = await Item.update(updatedBody, {where:{id: updatedBody.id}, returning: true})
            res.write(JSON.stringify(updatedItem))
            } catch (error) {
                throw error
            }
        })

        res.end()
}

const CreateItems = async (req, res) => {
    //PATH: /api/item/create
    let pakId = req.body.pakId
    req.body.items.forEach(async (x) => {
        try {
            let newItemBody = {pakId, ...x}
            let newItem = await Item.create(newItemBody)
            res.write(JSON.stringify(newItem))
        } catch (error) {
            throw error
        }
    })

        res.end()
}

module.exports = {
    DeleteItems,
    UpdateItems,
    CreateItems
}