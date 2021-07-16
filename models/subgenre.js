const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class Subgenre extends Model {}

Subgenre.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        album_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'album',
                key: 'id',
                unique: false
            }   
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tag',
                key: 'id',
                unique: false
            }   
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'subgenre',
    }
);

module.exports = Subgenre;