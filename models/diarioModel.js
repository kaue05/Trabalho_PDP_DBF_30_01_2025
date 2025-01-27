const diarioDB = require('./database/diarioDB')
// const database = require('../db');
const databaseInstance = require('../db');
const database = databaseInstance.getConnection();

class Diario {
    constructor(datadiario, titulodiario, descricaodiario, idviagem, criticadiario = null) {
        this.datadiario = datadiario;
        this.titulodiario = titulodiario;
        this.descricaodiario = descricaodiario;
        this.idviagem = idviagem;
        this.criticadiario = criticadiario;
    }

    async listarDiarios(idviagem) {
        try {
            const query = `
                SELECT 
                    diarios.id,
                    diarios.datadiario,
                    diarios.titulodiario,
                    viagens.title AS tituloviagem
                FROM 
                    diarios
                JOIN 
                    viagens ON diarios.idviagem = viagens.id
                WHERE 
                    diarios.idviagem = :idviagem;
            `;
    
            const result = await database.query(query, {
                replacements: { idviagem },
                type: database.QueryTypes.SELECT
            });
    
            return result || null;

        } catch (error) {
            console.error('Erro ao buscar diários:', error);
            return [];
        }
    }

    async sobreDiario(id) {
        try {
            const query = `
                SELECT 
                    diarios.titulodiario,
                    diarios.datadiario,
                    diarios.descricaodiario,
                    diarios.criticadiario,
                    viagens.imagepath
                FROM 
                    diarios
                JOIN 
                    viagens ON diarios.idviagem = viagens.id
                WHERE 
                    diarios.id = :id;
            `;
    
            const result = await database.query(query, {
                replacements: { id },
                type: database.QueryTypes.SELECT
            });
    
            return result[0] || null;
        } catch (error) {
            console.error('Erro ao buscar informações do diário:', error);
            return null;
        }
    }

    async getDiariosComTituloViagem() {
        try {
            const query = `
                SELECT 
                    diarios.id,
                    diarios.datadiario,
                    diarios.titulodiario,
                    viagens.title AS tituloviagem
                FROM 
                    diarios
                JOIN 
                    viagens ON diarios.idviagem = viagens.id;
            `;
            const result = await database.query(query);
            
            return result[0] || [];
        } catch (error) {
            console.error('Erro ao buscar diários:', error);
            return [];
        }
    }
}

class DiarioComCritica extends Diario {
    constructor(datadiario, titulodiario, descricaodiario, idviagem, criticadiario) {
        super(datadiario, titulodiario, descricaodiario, idviagem, criticadiario);
    }

    async criarDiario() {
        await diarioDB.create({
            datadiario: this.datadiario,
            titulodiario: this.titulodiario,
            descricaodiario: this.descricaodiario,
            criticadiario: this.criticadiario,
            idviagem: this.idviagem
        });
    }
}

class DiarioSemCritica extends Diario {
    constructor(datadiario, titulodiario, descricaodiario, idviagem) {
        super(datadiario, titulodiario, descricaodiario, idviagem);
    }

    async criarDiario() {
        await diarioDB.create({
            datadiario: this.datadiario,
            titulodiario: this.titulodiario,
            descricaodiario: this.descricaodiario,
            criticadiario: this.criticadiario,
            idviagem: this.idviagem
        });
    }
}

module.exports = {
    DiarioComCritica,
    DiarioSemCritica,
    modelDiario: new Diario()
};
