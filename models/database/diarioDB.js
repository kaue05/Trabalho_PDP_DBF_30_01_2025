const Sequelize = require('sequelize');
// const database = require('../../db');
const databaseInstance = require('../../db');
const database = databaseInstance.getConnection();

const viagemDB = require('./viagensDB');

const Diario  = database.define('diarios', {
    id: {
        type: Sequelize.INTEGER,    
        autoIncrement: true,
        primaryKey: true,
    },
    datadiario: {    
        type: Sequelize.DATEONLY, 
        allowNull: false,
    },
    titulodiario: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    descricaodiario: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    criticadiario: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null
    },
    idviagem: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: viagemDB,
            key: 'id'
        }
    }
} );

Diario.sync();


module.exports = Diario;
