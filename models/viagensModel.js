const ViagemDB = require('./database/viagensDB')
// const database = require('../db');
const databaseInstance = require('../db');
const database = databaseInstance.getConnection();

class Viagem {
    constructor(title, imagepath, imagealt) {
        this.title = title;
        this.imagepath = imagepath;
        this.imagealt = imagealt;

    }

    async criarViagem(title, imagepath, imagealt) {
        try {
            database.sync()
            await ViagemDB.create({
                title: title,
                imagepath: imagepath,
                imagealt: imagealt
            })

            return true
        } catch (error) {
            console.log(error)
        }
    }  

    async retornarTodasViagens() {
        let array = await ViagemDB.findAll( {
            attributes: ['id', 'title', 'imagepath', 'imagealt']
        })
        return array    
    }

    async getViagem(id) {
        try {
            const query = `
                SELECT 
                    id,
                    title,
                    imagepath,
                    imagealt
                FROM 
                    viagens
                WHERE 
                    id = :id;
            `;
            const result = await database.query(query, {
                replacements: { id },
                type: database.QueryTypes.SELECT
            });

            return result[0] || null;
        } catch (error) {
            console.error('Erro ao buscar viagem:', error);
        }
    }

    async alterarViagem(id, title, imagepath, imagealt) {
        try {
            await database.query(
                `UPDATE viagens
                    SET
                        title = :title,
                        imagepath = :imagepath,
                        imagealt = :imagealt
                    WHERE id = :id;`,
                {
                    replacements: { id, title, imagepath, imagealt },
                    type: database.QueryTypes.UPDATE
                }
            )
        }
        catch (error) {
            console.error('Erro ao alterar viagem:', error);
        }
    }

    async verificaDiariosViagem(id) {
        try {
            const query = `
                SELECT *
                FROM diarios
                WHERE idviagem = :id;
            `;
            const result = await database.query(query, {
                replacements: { id },
                type: database.QueryTypes.SELECT
            });
            return result[0] || null;
            console.log(result)
        } catch (error) {
            console.error('Erro ao verificar diários da viagem:', error);
        }
    }

    async excluirViagem(id) {
        try {
            await database.query(
                `DELETE FROM viagens
                    WHERE id = :id;`,
                {
                    replacements: { id },
                    type: database.QueryTypes.DELETE
                }
            )
        }
        catch (error) {
            console.error('Erro ao excluir viagem:', error);
        }
    }
}

module.exports = new Viagem