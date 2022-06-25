const asyncHandler = require('express-async-handler');
const Media = require('../models/mediaModel');
const Bookmark = require('../models/bookmarkedModel');
const User = require('../models/userModel');

/*  @description     Get All Media Data
    @route           GET /api/media
    @access          Public     */
const getAllMedia = asyncHandler(async (req, res) => {
  const allMedia = await Media.find().populate('bookmarks');
  res.json(allMedia);
});

/*  @description     Update the bookmarked status
    @route           PATCH /api/media/:id
    @access          Private    */
const updateMedia = asyncHandler(async (req, res) => {
  const { isBookmarked, media, user } = req.body;
  const findMedia = await Media.findById(req.params.id).populate('bookmarks');
  if (!findMedia) {
    res.status(400);
    throw new Error('Media not found with given id');
  }

  const existingBookmark = await Bookmark.findOne({
    user: req.user._id,
    media: findMedia._id,
  });

  const updatedBookmark = existingBookmark
    ? await Bookmark.findByIdAndUpdate(
        existingBookmark._id,
        { isBookmarked: !existingBookmark.isBookmarked },
        { new: true }
      )
    : await Bookmark.create({
        isBookmarked,
        user,
        media,
      });

  const updatedMedia = !existingBookmark
    ? await Media.findByIdAndUpdate(
        req.params.id,
        { $push: { bookmarks: [updatedBookmark._id] } },
        { new: true }
      ).populate('bookmarks')
    : findMedia;
  res.json(updatedMedia);
});

module.exports = {
  getAllMedia,
  updateMedia,
};
