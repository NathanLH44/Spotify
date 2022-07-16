const mongoose = require('mongoose');

const GenresModel = mongoose.model(
    "my_spotify_db_Genres",
    {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    "genres"
);

module.exports = { GenresModel };