const Song = require('../models/Song')

const getSongs = async (req, res, next) => {
    const filter = {};
    const options={};
    if(Object.keys(req.query).length){
        //query parameter
        const{
            songTitle,
            artist,
            genre,
            limit,
            sortByGenre
        } = req.query

        if(songTitle) filter.songTitle = true;
        if(artist) filter.artist = true;
        if(genre) filter.genre = true;
        if(limit) options.limit = limit;
        if (sortByGenre) options.sort = {
            genre: sortByGenre === 'asc' ? 1: -1
        }
    }
    try{
        const songs = await Song.find({}, filter, options);

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(songs)
    } catch(err){
        throw new Error(`ERROR RETRIEVING SONGS: ${err.message}`);
    }
}

const postSong = async(req, res, next) => {
    try{
        const song = await Song.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(song)

    }catch(err){
        throw new Error(`ERROR ADDING SONG: ${err.message}`);
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
            msg:'SUCCESSFUL: ALL SONGS DELETED!'
        })
    }catch(err){
        throw new Error(`ERROR DELETING SONG: ${err.message}`);
    }
}

const getSong = async(req, res, next) => {
    try{
        const song = await Song.findById(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(song)
    }catch(err){
        throw new Error(`ERROR GETTING SONG: ${req.params.artistId} : ${err.message}`);
    }
}

const updateSong = async(req, res, next) => {
    try{
        const song = await Song.findByIdAndUpdate(
            req.params.songId, 
            {$set: req.body},
            {new: true})

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(song)
    }catch(err){
        throw new Error(`ERROR UPDATING SONG: ${req.params.songId}: ${err.message}`);
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
        throw new Error(`ERROR DELETING SONG: ${err.message}`);
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


