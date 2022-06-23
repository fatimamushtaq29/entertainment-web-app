const asyncHandler = require('express-async-handler');
const Bookmark = require('../models/bookmarkedModel');
const User = require('../models/userModel');
const Media = require('../models/mediaModel');
// const { findById } = require('../models/bookmarkedModel');

// /*  @description     Get All Bookmarks
//     @route           GET /api/bookmarks
//     @access          Public     */
// const getAllBookmarks = asyncHandler(async (req, res) => {
//   const allBookmarks = await Bookmark.find();
//   res.json(allBookmarks);
// });

// module.exports = getAllBookmarks;

/*  @description     Create new Bookmark
    @route           POST /api/bookmarks
    @access          Private     */
// const createNewBookmark = asyncHandler(async (req, res) => {
//   const { userId, mediaId } = req.body;

//   if (!(await User.findOne({ _id: userId }))) {
//     res.status(400);
//     throw new Error("User doesn't exists");
//   }

//   if (!(await Media.findOne({ _id: mediaId }))) {
//     res.status(400);
//     throw new Error("Media doesn't exists");
//   }

//   const newBookmark = await Bookmark.create({
//     isBookmarked: true,
//     user: userId,
//     media: mediaId,
//   });
//   res.json(newBookmark);
// });

/*  @description     Update Bookmark
    @route           PATCH /api/bookmarks/:id
    @access          Private     */
// const updateBookmark = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   try {
//     const findBookmark = await Bookmark.findOne({
//       _id: id,
//       user: req.user._id,
//     });
//     const updatedBookmark = await Bookmark.findByIdAndUpdate(id, {
//       isBookmarked: !findBookmark.isBookmarked,
//     }, { new: true });
//     res.json(updatedBookmark);
//   } catch (error) {
//     res.status(401);
//       throw new Error('Not authorized');
//   }
// });

/*  @description     Get current user Bookmarks
@route           GET /api/bookmarks/:id
@access          Public     */
const getCurrentUserBookmarks = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const currentUserBookmarks = await Bookmark.find({ user: id });
  res.json(currentUserBookmarks);
});

module.exports = {
  // getAllBookmarks,
  // createNewBookmark,
  // updateBookmark,
  getCurrentUserBookmarks,
};
