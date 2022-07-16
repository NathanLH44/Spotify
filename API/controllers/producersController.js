const express = require('express');
const router = express.Router();

const { ProducersModel } = require('../models/producersModel');

router.get('/', (req, res) => {
    ProducersModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
})

module.exports = router 