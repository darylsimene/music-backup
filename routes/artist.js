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

router.route('/')
      .get(reqReceivedLogger, getArtists)
      .post(reqReceivedLogger, artistValidator, postArtist)
      .delete(reqReceivedLogger, deleteArtists)

router.route('/:artistId')
      .get(reqReceivedLogger, getArtist)
      .put(reqReceivedLogger, updateArtist)
      .delete(reqReceivedLogger, deleteArtist)

router
.route('/:artistId/image')
.post(reqReceivedLogger, postArtistImage)


module.exports = router;