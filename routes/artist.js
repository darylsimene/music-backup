const express = require('express'); 
const router = express.Router(); 

const {
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist,
    postArtistImage
} = require('../controllers/artistController');

const reqReceivedLogger = require('../middlewares/reqReceivedLogger');
const {artistValidator} = require('../middlewares/utils/validator')
const protectedRoute = require('../middlewares/auth')

router.route('/')
      .get(reqReceivedLogger, getArtists)
      .post(reqReceivedLogger,protectedRoute, artistValidator, postArtist)
      .delete(reqReceivedLogger, protectedRoute, deleteArtists)

router.route('/:artistId')
      .get(reqReceivedLogger, getArtist)
      .put(reqReceivedLogger, protectedRoute, updateArtist)
      .delete(reqReceivedLogger, protectedRoute, deleteArtist)

router
.route('/:artistId/image')
.post(reqReceivedLogger, postArtistImage)


module.exports = router;