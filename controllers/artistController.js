const Artist = require('../models/Artist')

const getArtists = async(req, res, next) => {
    try{
        const result = await Artist.find()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'These are the artists!'
        })
    } catch(err){
        throw new Error(`Error retrieving artist`)
    }
}

const postArtist = async(req, res, next) => {
    try{
        const result = await Artist.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }catch(err){
        throw new Error(`Error in adding that artist ${err.message}`)
    }
}

const deleteArtists = async(req, res, next) => {
    try{
        await Artist.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'Successfully deleted all the Artist'
        })
    } catch(err){
        throw new Error(`Error Deleting Users`)
    }
}

// For ‘/:artist’ endpoint: 
const getArtist = async(req, res, next) => {
    try{
        const result = await Artist.findById(req.params.artistId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }catch(err){
        throw new Error(`Error getting Artist ${req.params.artistId} : ${err.message}`)
    }
}

const updateArtist = async(req, res, next) => {
    try{
        const result = await Artist.findByIdAndUpdate(req.params.artistId)

        res
        .status(200)
        .setHeader('Content-Type', 'applicaion/json')
        .json(result)
    }catch(err){
        throw new Error(`Error updating artist - ${req.params.artistId} : ${err.message}`)
    }
}

const deleteArtist = async(req, res, next) => {
    try{
        const result = await Artist.findByIdAndDelete(req.params.artistId)

        res
        .status(200)
        .setHeader('Content-Type', 'applicaion/json')
        .json(result)
    }catch(err){
        throw new Error(`Error deleting artist - ${req.params.artistId} : ${err.message}`)
    }
}

module.exports = {
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist
}

// if(Object.keys(req.query).length){
    //     //query parameter
    //     const{
    //         firstName,
    //         lastName,
    //         gender
    //     } = req.query

    //     const filter = []
        
    //     if(firstName) filter.push(firstName);
    //     if(lastName) filter.push(lastName);
    //     if(gender) filter.push(gender);
        
    //     for (let i = 0; i < filter.length; i++){
    //         console.log(`Searching artist(s) by: ${filter[i]}`)
    //     }
    // }