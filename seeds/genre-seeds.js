const { Genre } = require('../models');

const genreData = [
  {
    name: 'Rock',
  },
  {
    name: 'Metal',
  },
  {
    name: 'Pop',
  },
  {
    name: 'Electronic',
  },
  {
    name: 'R&B/Blues',
  },
  {
    name: 'Jazz',
  },
  {
    name: 'Classical',
  },
  {
    name: 'Country',
  },
  {
    name: 'Rap/Hip-Hop',
  },
];

const seedGenres = () => genre.bulkCreate(genreData);

module.exports = seedGenres;