const express = require('express'); 
const router = express.Router(); 

const {
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

} = require('../controllers/songController');

const reqReceivedLogger = require('../middlewares/reqReceivedLogger');
const {songValidator} = require('../middlewares/utils/validator');

router
.route('/')
.get(reqReceivedLogger, getSongs)
.post(reqReceivedLogger, songValidator, postSong)
.delete(reqReceivedLogger, deleteSongs)

router
.route('/:songId')
.get(reqReceivedLogger, getSong)
.put(reqReceivedLogger, updateSong)
.delete(reqReceivedLogger, deleteSong)

 //! ================= FOR SONG REVIEW ROUTES
 router
 .route('/:songId/ratings')
 .get(reqReceivedLogger, getSongRatings)
 .post(reqReceivedLogger, postSongRating)
 .delete(reqReceivedLogger, deleteSongRatings)

 router
 .route('/:songId/ratings/:ratingId')
 .get(reqReceivedLogger, getSongRating)
 .put(reqReceivedLogger, updateSongRating)
 .delete(reqReceivedLogger, deleteSongRating)



module.exports = router;