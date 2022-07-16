const express = require('express');
const api = express();
require('./models/dbConfig');

const albumsRoutes = require('./controllers/albumsController');
const producersRoutes = require('./controllers/producersController');
const genresRoutes = require('./controllers/genresController');
const genres_albumsRoutes = require('./controllers/genres_albumsController');
const tracksRoutes = require('./controllers/tracksController');

const cors = require('cors');
api.use(cors('http://localhost:3000'));

api.use('/albums', albumsRoutes);
api.use('/artists', producersRoutes);
api.use('/genres', genresRoutes);
api.use('/genres_albums', genres_albumsRoutes);
api.use('/tracks', tracksRoutes);

api.listen(5500, () => console.log('Serveur started: 5500'));