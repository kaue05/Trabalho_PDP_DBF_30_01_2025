const Sequelize = require('sequelize');
// const database = require('../../db');
const databaseInstance = require('../../db');
const database = databaseInstance.getConnection();

const Viagem = database.define('viagens', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    title: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },

    imagepath: {
        type: Sequelize.STRING(1000),
        allowNull: false,
    },

    imagealt: {
        type: Sequelize.STRING(255),
        allowNull: false,
    }
});

Viagem.sync();

module.exports = Viagem;
