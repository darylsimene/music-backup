const express = require('express'); 
const router = express.Router(); 

const {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const reqReceivedLogger = require('../middlewares/reqReceivedLogger');
const {userValidator} = require('../middlewares/utils/validator');

router.route('/')
      .get(reqReceivedLogger, getUsers)
      .post(reqReceivedLogger, userValidator, postUser)
      .delete(reqReceivedLogger, deleteUsers)

router.route('/:userId')
      .get(reqReceivedLogger, getUser)
      .put(reqReceivedLogger, updateUser)
      .delete(reqReceivedLogger, deleteUser)

module.exports = router;