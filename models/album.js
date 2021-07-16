// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Album extends Model {}

// set up fields and rules for Album model
Album.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    album_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    artist_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    released: {
      type: DataTypes.STRING,
    },

    label: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    length: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    amazon_image_link: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    amazon_link: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    spotify_embed: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    likes: {
      type: DataTypes.INTEGER,
      default: 0,
    },

    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
        unique: false,
      },
    },
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "genre",
        key: "id",
        unique: false,
      },
    },
    playlist_album_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "playlist",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "album",
  }
);

module.exports = Album;
