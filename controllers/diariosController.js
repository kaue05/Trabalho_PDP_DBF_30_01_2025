const modelViagem = require('../models/viagensModel')
// const modelDiario = require('../models/diarioModel');
const { DiarioComCritica, DiarioSemCritica, modelDiario} = require('../models/diarioModel');


const paginaHome = function(req, res){
    res.render('paginaHome')
}

const paginaCriarDiario = async function(req, res){
    const arrayViagens = await modelViagem.retornarTodasViagens()

    res.render('paginaCriarDiario', {arrayViagens})
}

const criarDiario = async function (req, res) {
    const { datadiario, titulodiario, descricaodiario, criticadiario, idviagem } = req.body;

    console.log(datadiario, titulodiario, descricaodiario, criticadiario, idviagem);

    try {
        let diario;

        if (criticadiario && criticadiario.trim() !== '') {
            diario = new DiarioComCritica(datadiario, titulodiario, descricaodiario, idviagem, criticadiario);
        } else {
            diario = new DiarioSemCritica(datadiario, titulodiario, descricaodiario, idviagem);
        }

        await diario.criarDiario();
        res.redirect('/todosDiarios');
    } catch (error) {
        console.error('Erro ao criar diário:', error);
        res.status(500).send('Erro ao criar diário');
    }
};


const sobreDiario = async (req, res) => {
    try {
        const { id } = req.params;
        console.log({id})
        const diario = await modelDiario.sobreDiario(id);
        console.log(diario);

        if (!diario) {
            return res.status(404).send('Diário não encontrado');
        }

        res.render('paginaSobreDiario', { diario });
    } catch (error) {
        console.error('Erro ao carregar informações do diário:', error);
        res.status(500).send('Erro interno do servidor');
    }
};

const paginaTodosDiarios = async function (req, res) {
    try {
        const arrayDiarios = await modelDiario.getDiariosComTituloViagem();
        console.log(arrayDiarios);
        res.render('paginatodosDiarios', { arrayDiarios });
    } catch (error) {
        console.error('Erro ao listar diários:', error);
        res.render('paginatodosDiarios', { arrayDiarios: [] });
    }
};

const paginaDiariosViagem = async function (req, res) {
    try {
        const { id } = req.params;
        console.log({id})

        const arrayDiarios = await modelDiario.listarDiarios(id);
        console.log(arrayDiarios);
        res.render('paginaDiariosViagem', { arrayDiarios });
    } catch (error) {
        console.error('Erro ao listar diários:', error);
        res.render('paginaDiariosViagem', { arrayDiarios: [] });
    }
};

module.exports = {paginaHome, paginaCriarDiario, sobreDiario, paginaTodosDiarios, paginaDiariosViagem, criarDiario}