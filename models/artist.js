const { Schema } = require('mongoose')
const artistSchema = new Schema(
    {
        artist: { type: String, required: true },
        set_list: { type: Array, required: true },
        album_tour: { type: String, required: true },
        isHeadliner: { type: Boolean, required: true },
        image: { type: String }
    },
    { timestamps: true }
)

module.exports = artistSchema