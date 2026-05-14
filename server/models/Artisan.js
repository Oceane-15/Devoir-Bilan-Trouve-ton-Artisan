const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Artisan = sequelize.define('Artisan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    note: {
        type: DataTypes.DECIMAL(2, 1),
        defaultValue: 0.0
    },
    speciality_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    localisation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    a_propos: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    site_web: {
        type: DataTypes.STRING
    },
    photo: {
        type: DataTypes.STRING,
        defaultValue: 'default.jpg'
    },
    top_artisan: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'artisans',
    timestamps: false    
});

module.exports = Artisan;