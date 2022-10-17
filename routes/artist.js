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

const reqLogger = require('../middlewares/reqReceivedLogger');
const {artistValidator} = require('../middlewares/utils/validator')

router.route('/')
      .get(reqLogger, getArtists)
      .post(reqLogger, artistValidator, postArtist)
      .delete(reqLogger, deleteArtists)

router.route('/:artistId')
      .get(reqLogger, getArtist)
      .put(reqLogger, updateArtist)
      .delete(reqLogger, deleteArtist)

module.exports = router;