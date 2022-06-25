const express = require('express');
const router = express.Router()
const { getCurrentUserBookmarks } = require('../controllers/bookmarkControllers');

router.route('/:id').get(getCurrentUserBookmarks)

module.exports = router