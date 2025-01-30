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

    async sobreDiario(id) {
        try {
            const query = `
                SELECT
                    diarios.id,
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
                    viagens.imagepath AS image,
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

    async listarDiarios(idviagem) {
        try {
            const query = `
                SELECT 
                    diarios.id,
                    diarios.datadiario,
                    diarios.titulodiario,
                    viagens.title AS tituloviagem,
                    viagens.imagepath AS image
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

    async getDiarioId(id) {
        try {
            const query = `
                SELECT 
                    diarios.id,
                    diarios.datadiario,
                    diarios.titulodiario,
                    diarios.descricaodiario,
                    diarios.criticadiario,
                    diarios.idviagem
                FROM 
                    diarios
                WHERE 
                    diarios.id = :id;
            `;
            const result = await database.query(query, {
                replacements: { id },
                type: database.QueryTypes.SELECT
            });
            
            return result[0] || null;
        } catch (error) {
            console.error('Erro ao buscar diário:', error);
            return null;
        }
    }

    async atualizarDiario(id, datadiario, titulodiario, descricaodiario, criticadiario, idviagem) {
        console.log('esse é o id', id)
        try {
            await database.query(`
                UPDATE diarios
                SET datadiario = :datadiario,
                    titulodiario = :titulodiario,
                    descricaodiario = :descricaodiario,
                    criticadiario = :criticadiario,
                    idviagem = :idviagem
                WHERE id = :id;
            `, {
                replacements: { id, datadiario, titulodiario, descricaodiario, criticadiario, idviagem },
                type: database.QueryTypes.UPDATE
            });
        } catch (error) {
            console.error('Erro ao atualizar diário:', error);
        }
    }

    async excluirDiario(id) {
        try {
            await database.query(`
                DELETE FROM diarios
                WHERE id = :id;
            `, {
                replacements: { id },
                type: database.QueryTypes.DELETE
            });
        } catch (error) {
            console.error('Erro ao excluir diário:', error);
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
