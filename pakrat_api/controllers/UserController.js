const { User } = require('../models')

const middleware = require('../middleware')

const Login = async (req, res) => {
    //PATH: /api/user/login
    try {
        const user = await User.findOne({
            where: {email : req.body.email},
            raw: true
        })
        if (
            user &&
          //check password vs passwordDigest vs undPassword
            (await middleware.comparePassword(req.body.password, user.passwordDigest))
        ) {
            let payload = {
            id: user.id,
            email: user.email,
            username: user.userName
            }
            let token = middleware.createToken(payload)
            return res.send({
            user: payload, token
            })
        } else {
            console.log('user and/or compare false')
        }
        res.status(401).send({
            status: 'error',
            msg: 'unauthorized, login'
        })
    } catch (error) {
        console.log('Login controller error')
        throw error
    }
}


const Register = async (req, res) => {
    //PATH: /api/user/register
    try {
        const { userName, password, email } = req.body
        //check password vs passwordDigest vs undPassword
        let passwordDigest = await middleware.hashPassword(password)
        const user = await User.create({userName, passwordDigest, email})
        res.send(user)
    } catch (error) {
        console.log('Register controller error')
        throw error
    }
}

const CheckSession = async (req, res) => {
    //PATH: /api/user/session
    const { payload } = res.locals
    res.send(payload)
}


module.exports = {
    Login,
    Register,
    CheckSession
}