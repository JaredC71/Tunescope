const sequelize = require("../config/connection");
const seedAlbums = require('./album-seeds');
const seedGenres = require('./genre-seeds');

const seedAll = async () => {
    await sequelize.sync({force: true})
    console.log("\n------------DATABASE SYNCED---------------\n");
    await seedGenres();
    console.log("\n-------------GENRES SEEDED-------------\n");
    await seedAlbums();
    console.log("\n-------------ALBUMS SEEDED-------------\n");
    process.exit(0);
}

seedAll();