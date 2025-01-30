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

const paginaEditarDiario = async function (req, res) {
    try { 
        const { id } = req.params;
        console.log({id});
        const arrayViagens = await modelViagem.retornarTodasViagens()

        const diario = await modelDiario.getDiarioId(id);
        console.log(diario);
        res.render('paginaEditarDiario', { diario, arrayViagens });
    } catch (error) {
        console.error('Erro ao buscar diário:', error);
        res.status(500).send('Erro ao buscar diário');
    }
};

const atualizarDiario = async function (req, res) {
    try {
        const { id } = req.params;

        const { datadiario, titulodiario, descricaodiario, criticadiario, idviagem } = req.body;

        if (criticadiario && criticadiario.trim() !== '') {
            await modelDiario.atualizarDiario(id, datadiario, titulodiario, descricaodiario, criticadiario, idviagem);
        } else {
            await modelDiario.atualizarDiario(id, datadiario, titulodiario, descricaodiario, null, idviagem);
        }

        res.redirect('/todosDiarios');
    } catch (error) {
        console.error('Erro ao atualizar diário:', error);
        res.status(500).send('Erro ao atualizar diário');
    }
}

const excluirDiario = async function (req, res) {
    try {
        const { id } = req.params;
        await modelDiario.excluirDiario(id);
        res.redirect('/todosDiarios');
    } catch (error) {
        console.error('Erro ao excluir diário:', error);
        res.status(500).send('Erro ao excluir diário');
    }
};

module.exports = {paginaHome, paginaCriarDiario, sobreDiario, paginaTodosDiarios, paginaDiariosViagem, criarDiario, paginaEditarDiario, atualizarDiario, excluirDiario}