const express = require('express');
const router = express.Router()
const { getCurrentUserBookmarks } = require('../controllers/bookmarkControllers');
// const protect = require('../middleware/authMiddleware');

// router.route('/').get(getAllBookmarks).post(protect, createNewBookmark)
router.route('/:id').get(getCurrentUserBookmarks)

module.exports = router