const User = require('../models/User')

const getUsers = async (req, res, next) => {
    const filter = {};
    const options = {};
    if(Object.keys(req.query).length){
        //query parameter
        const{
            userName,
            gender,
            age,
            email,
            password,
            firstName,
            lastName,
            limit,
            sortByAge,
        } = req.query

        if(userName) filter.userName = true;
        if(gender) filter.gender = true;
        if(age) filter.age = true;
        if(email) filter.email = true;
        if(password) filter.password = true;
        if(firstName) filter.firstName = true;
        if(lastName) filter.lastName = true;
        if(limit) options.limit = limit;
        if(sortByAge) options.sort = {
            age: sortByAge === 'asc'? 1 :-1
        }
    }
    try{
        const users = await User.find({}, filter, options)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(users)
    }catch(err){
        throw new Error(`ERROR RETRIEVING USERS: ${err.message}`);
    }
}

const postUser = async (req, res, next) => {
    try{
        const user = await User.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    }catch(err){
        throw new Error(`ERROR ADDING USER: ${err.message}`);
    }
    
}

const deleteUsers = async(req, res, next) => {
    try{
        await User.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'SUCCESSFUL: ALL USERS DELETED!'
        })
    } catch(err){
        throw new Error(`ERROR DELETING USER: ${err.message}`);
    }
}

// For ‘/:gender’ endpoint: 
const getUser = async(req, res, next) => {
    try{
        const user = await User.findById(req.params.userId)

        res
        .status(200)
        .setHeader('Content-Type','application/json')
        .json(user)

    }catch(err){
        throw new Error(`ERROR GETTING USER: ${err.message}`);
    }
}

const updateUser = async(req, res, next) => {
    try{
        const user = await User.findByIdAndUpdate(
            req.params.userId, 
            { $set: req.body }, 
            { new: true })

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    }catch(err){
        throw new Error(`ERROR UPDATING USER: ${err.message}`);
    }
}

const deleteUser = async(req, res, next) => {
    try{
        await User.findByIdAndDelete(req.params.userId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success:true,
            msg:`User ${req.params.userId} has been deleted!`
        })
    }catch(err){
        throw new Error(`ERROR DELETING USER: ${err.message}`);
    }
}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser
}

