const User = require('../models/User')

const getUsers = async (req, res, next) => {
    try{
        const results = await User.find()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }catch(err){
        throw new Error(`Error retrieveing users: ${err.message}`);
    }
}

const postUser = async (req, res, next) => {
    try{
        const result = await User.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }catch(err){
        throw new Error(`Can't seem to add that song! ${err.message}`);
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
            msg: 'ALL USERS DOC DELETED'
        })
    } catch(err){
        throw new Error(`Error deleting the user. ${err.message}`);
    }
}

// For ‘/:gender’ endpoint: 
const getUser = async(req, res, next) => {
    try{
        const result = await User.findById(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type','application/json')
        .json(result)

    }catch(err){
        throw new Error(`That user isn't here, hun ${err.message}`);
    }
}

const updateUser = async(req, res, next) => {
    try{
        const result = await User.findByIdAndUpdate(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }catch(err){
        throw new Error(`Error Updating User. ${err.message}`);
    }
}

const deleteUser = async(req, res, next) => {
    try{
        await User.findByIdAndDelete(req.params.userId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }catch(err){
        throw new Error(`Error Deleting the User. ${err.message}`);
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

// if(Object.keys(req.query).length){
    //     //query parameter

    //     const{
    //         userName,
    //         gender,
    //         age

    //     } = req.query

    //     const filter = []
        
    //     if(userName) filter.push(userName);
    //     if(gender) filter.push(gender);
    //     if(age) filter.push(age);
        
    //     res
    //     .status(200)
    //     .setHeader('Content-Type', 'application/json')
    //     .json({
    //         success: true,
    //         msg: 'Now playing ALL THE SONGS.'
    //     })

    //     for (let i = 0; i < filter.length; i++){
    //         console.log(`Searching user(s) by: ${filter[i]}`)
    //     }
    // }