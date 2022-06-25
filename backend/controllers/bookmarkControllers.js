const asyncHandler = require('express-async-handler');
const Bookmark = require('../models/bookmarkedModel');
const User = require('../models/userModel');
const Media = require('../models/mediaModel');

/*  @description     Get current user Bookmarks
@route           GET /api/bookmarks/:id
@access          Public     */
const getCurrentUserBookmarks = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const currentUserBookmarks = await Bookmark.find({ user: id });
  res.json(currentUserBookmarks);
});

module.exports = {
  getCurrentUserBookmarks,
};
