const { Sequelize } = require('sequelize');

// Sem usar Singleton
// const sequelize = new Sequelize('diario_de_viagens', 'postgres', '1234', {
//     logging: false,
//     dialect: 'postgres',
//     host: 'localhost',
//     port: 5432,
// });

// module.exports = sequelize;


// Usando Singleton
class Database {
    constructor() {
        if (!Database.instance) {
            this.sequelize = new Sequelize('diario_de_viagens', 'postgres', '1234', {
                logging: false,
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
            });
            Database.instance = this;
        }
        return Database.instance;
    }

    getConnection() {
        return this.sequelize;
    }
}

const databaseInstance = new Database();
Object.freeze(databaseInstance); 

module.exports = databaseInstance;