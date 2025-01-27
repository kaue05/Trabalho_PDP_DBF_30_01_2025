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
}   

module.exports = new Viagem