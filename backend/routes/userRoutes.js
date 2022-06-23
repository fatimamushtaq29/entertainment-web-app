const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getLoggedInUser} = require('../controllers/userControllers')
const protect = require('../middleware/authMiddleware')

router.route('/').post(registerUser)
router.post('/login', loginUser)
router.get('/user', protect, getLoggedInUser)

module.exports = router