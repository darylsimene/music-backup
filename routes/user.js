const express = require('express'); 
const router = express.Router(); 

const {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser,
    login
} = require('../controllers/userController');

const reqReceivedLogger = require('../middlewares/reqReceivedLogger');
const {
      userValidator, 
      adminValidator
} = require('../middlewares/utils/validator');
const protectedRoute = require('../middlewares/auth')

router
.route('/')
.get(reqReceivedLogger, adminValidator, getUsers)
.post(reqReceivedLogger, userValidator, postUser)
.delete(reqReceivedLogger, protectedRoute, deleteUsers)

router
.route('/login')
.post(reqReceivedLogger, login)

router
.route('/:userId')
.get(reqReceivedLogger, getUser)
.put(reqReceivedLogger, protectedRoute, updateUser)
.delete(reqReceivedLogger, protectedRoute, deleteUser)

module.exports = router;