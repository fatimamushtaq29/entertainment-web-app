const mongoose = require('mongoose')

const bookmarkSchema = mongoose.Schema({
    isBookmarked: {
        type: Boolean,
        required: true,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    media: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media',
        required: true
    }
})

module.exports = mongoose.model('Bookmark', bookmarkSchema)