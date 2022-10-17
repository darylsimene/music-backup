const express = require('express'); 
const router = express.Router(); 

const {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong
} = require('../controllers/songController');

const reqReceivedLogger = require('../middlewares/reqReceivedLogger');
const {songValidator} = require('../middlewares/utils/validator');

router.route('/')
      .get(reqReceivedLogger, getSongs)
      .post(reqReceivedLogger, songValidator, postSong)
      .delete(reqReceivedLogger, deleteSongs)

router.route('/:songId')
      .get(reqReceivedLogger, getSong)
      .put(reqReceivedLogger, updateSong)
      .delete(reqReceivedLogger, deleteSong)

module.exports = router;