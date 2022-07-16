const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/my_spotify_db",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) 
            console.log("Connection to Mongodb.. OK");
        else 
            console.log("Connection to Mongodb failed...");
    }
)