const Song = require('../models/Song')




//! -------------------------SONG -----------------------------
// FOR ("/") ENDPOINTS ---------------------------------

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









//! -------------------------SONG -----------------------------
// FOR ("/:songID") ENDPOINTS ---------------------------------
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









//! -------------------------SONG RATINGS -----------------------------
// FOR ("/") ENDPOINTS ------------------------------------------------

const getSongRatings = async (req, res, next) => {
    try {
        const songs = await Song.findById(req.params.songId);
        const ratings = songs.ratings;

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(ratings)
        
    } catch (error) {
        throw new Error(`ERROR GETTING RATINGS IN THE SONGS!`);
    }
}

const postSongRating = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId);
        song.ratings.push(req.body) //Push the body into the ratings of the document SONG

        const result = await song.save(); //save the changes 

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    } catch (error) {
        throw new Error(`ERROR POSTING RATING IN THE SONG! : ${err.message}`)
    }
}

const deleteSongRatings = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId)
        song.ratings = []; //make the Rating sub-doc empty

        const result = await song.save(); //save the changes 

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    } catch (error) {
        throw new Error(`ERROR DELETING THE SONG! : ${err.message}`);
    }
}









//! -------------------------SONG RATINGS -----------------------------
// FOR ('/:songId/ratings/ratingsId') ENDPOINTS ---------------------------
const getSongRating = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}
const updateSongRating = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}
const deleteSongRating = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}





module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong,
    getSongRatings,
    postSongRating,
    deleteSongRatings,
    getSongRating,
    updateSongRating,
    deleteSongRating
}


