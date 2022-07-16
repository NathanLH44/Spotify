const express = require('express');
const router = express.Router();

const { TracksModel } = require('../models/tracksModel');

router.get('/', (req, res) => {
    TracksModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
})

module.exports = router 