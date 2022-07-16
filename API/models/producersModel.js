const mongoose = require("mongoose");

const ProducersModel = mongoose.model(
    "my_spotify_db_Producers",
    {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: true
        }
    },
    "artists"
);

module.exports = { ProducersModel };