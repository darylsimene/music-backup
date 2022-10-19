// const {songValidator} = require('../middlewares/utils/validator');
const Song = require('../models/Song')

const getSongs = async (req, res, next) => {
    try{
        const result = await Song.find();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    } catch(err){
        throw new Error(`Error retrieving categories: ${err.message}`);
    }
}

const postSong = async(req, res, next) => {
    try{
        const result = await Song.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(result)

    }catch(err){
        throw new Error(`SONG ERROR: ${err.message}`);
    }
}

const deleteSongs = async (req, res, next) => {
    try{
        await Song.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            sucess:true,
            msg:'ALL SONGS DOC DELETED'
        })
    }catch(err){
        throw new Error(`Songs can't be deleted. ${err.message}`);
    }
}

const getSong = async(req, res, next) => {
    try{
        const result = await Song.findById(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }catch(err){
        // res.json(`It seems like we dont have that song`)
        throw new Error(`It seems like we don't have that song. ${req.params.songId}: ${err.message}`);
    }
}

const updateSong = async(req, res, next) => {
    try{
        const result = await Song.findByIdAndUpdate(
            req.params.songId, 
            {$set: req.body},
            {new: true})

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    }catch(err){
        throw new Error(`Sum'n wrong with the update ${req.params.songId}: ${err.message}`);
    }
}

const deleteSong = async (req, res, next) => {
    try{
        await Song.findByIdAndDelete(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success:true,
            msg: `Song ${req.params.songId} has been deleted!`
        })
    } catch(err){
        throw new Error(`Sum'n wrong in deleting that song! ${err.message}`);
    }
}

module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong
}


