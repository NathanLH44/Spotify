const mongoose = require("mongoose");

const AlbumsModel = mongoose.model(
    "my_spotify_db_Albums",
    {
        id: {
            type: Number,
            required: true
        },
        artist_id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            //maxLength: 150,
            required: true
        },
        cover: {
            type: String,
            required: true
        },
        cover_small: {
            type: String,
            required: true
        },
        release_date: {
            type: Number,
            required: true
        }
    },
    "albums"
);

module.exports = { AlbumsModel };