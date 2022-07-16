const mongoose = require("mongoose");

const TracksModel = mongoose.model(
    "my_spotify_db_Tracks",
    {
        id: {
            type: Number,
            required: true
        },
        album_id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        track_no: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        mp3: {
            type: String,
            required: true
        }
    },
    "tracks"
);

module.exports = { TracksModel };