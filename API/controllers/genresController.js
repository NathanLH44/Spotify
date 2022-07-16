const express = require('express');
const router = express.Router();

const { GenresModel } = require('../models/genresModel');

router.get('/', (req, res) => {
    GenresModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
})

module.exports = router 