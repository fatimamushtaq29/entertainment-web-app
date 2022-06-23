const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: Object,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  isBookmarked: {
    type: Boolean,
    required: true,
    default: false
  },
  bookmarks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bookmark'
    }
  ],
  isTrending: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Media', mediaSchema);
