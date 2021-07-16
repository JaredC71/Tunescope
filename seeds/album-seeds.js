const sequelize = require("../config/connection");
const { Album } = require("../models");
const albumData = require('./albumdata.json');

const seedAlbums = async () =>  {
  await sequelize.sync({force: true})
  await Album.bulkCreate(albumData)}
  
module.exports = seedAlbums;