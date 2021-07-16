const { Tag } = require('../models');

const tagData = [
  {
    name: 'Classic Rock',
  },
  {
    name: 'Progressive Rock',
  },
  {
    name: 'Psychadelic Rock',
  },
  {
    name: 'Hard Rock',
  },
  {
    name: 'Glam Rock',
  },
  {
    name: 'Soft Rock',
  },
  {
    name: 'Modern Rock',
  },
  {
    name: 'Experimental Rock',
  },
  {
    name: 'Indie Rock',
  },
  {
    name: 'Alternative Rock',
  },
  {
    name: 'Funk Rock',
  },
  {
    name: 'Southern Rock',
  },
  {
    name: 'Blues Rock',
  },
  {
    name: 'Folk Rock',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;