const mongoose = require("mongoose");

const Genres_AlbumsModel = mongoose.model(
    "my_spotify_db_Genres-albums",
    {
        genre_id: {
            type: Number,
            required: true
        },
        albums_id: {
            type: Number,
            required: true
        }

    },
    "genres_albums"
);

module.exports = { Genres_AlbumsModel };