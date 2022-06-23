const express = require('express');
const router = express.Router()
const {getAllMedia, updateMedia} = require('../controllers/mediaControllers')
const protect = require('../middleware/authMiddleware')

router.route('/').get(getAllMedia)
router.route('/:id').patch(protect, updateMedia)

module.exports = router