const jwt = require('jsonwebtoken');
const User = require('../models/User')

const protectedRoute = async (req, res, next) => {
    let token;
    const headAuth = req.headers.authorization //to access the authorization header in postman

    if(headAuth && headAuth.startsWith('Bearer')){
        token = headAuth.split(' ')[1]
    } //to split the bearer from the token

    if(!token) throw new Error(`NOT AUTHORIZED TO ACCESS THIS ROUTE`)
    //if token is invalid

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decoded.id)

        next()
    } catch (error) {
        throw new Error(`NOT AUTHORIZED TO ACCESS THIS ROUTE`)
    }
}

module.exports = protectedRoute;