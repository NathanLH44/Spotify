const express = require('express');
const router = express.Router();

const { Genres_AlbumsModel } = require('../models/genres_albumsModel');

router.get('/', (req, res) => {
    Genres_AlbumsModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
})

module.exports = router 