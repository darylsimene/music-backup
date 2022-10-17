const express = require('express'); 
const router = express.Router(); 

const {
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist
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

module.exports = router;