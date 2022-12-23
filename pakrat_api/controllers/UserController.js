const { User } = require('../models')

const Register = async (req, res) => {
    //PATH: /api/user/register
    try {

        let newUser = await User.create(req.body)
        res.send(newUser)

    } catch (error) {
        console.log('Register controller error')
        throw error
    }
}

module.exports = {
    Register
}