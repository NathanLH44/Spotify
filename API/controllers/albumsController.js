const express = require('express');
const router = express.Router();

const { AlbumsModel } = require('../models/albumsModel');

router.get('/', (req, res) => {
    AlbumsModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
})

module.exports = router 