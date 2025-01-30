const modelViagem = require('../models/viagensModel')

const paginaCriarViagem = function(req, res){
    res.render('paginaCriarViagem')
}

const criarViagem = async function(req, res){
    const tituloViagem = req.body.title
    const caminhoImagem = req.body.imagepath
    const descricaoImagem = req.body.imagealt

    console.log(tituloViagem)
    console.log(caminhoImagem)
    console.log(descricaoImagem)

    const validacao  = await modelViagem.criarViagem(tituloViagem, caminhoImagem, descricaoImagem)

    console.log(validacao)

    res.redirect('/todasViagens')
}

const paginaTodasViagens = async function (req, res) {
    const arrayViagens =  await modelViagem.retornarTodasViagens()
    console.log(arrayViagens)
    res.render('paginaTodasViagens', {arrayViagens})
};

const paginaAlterarViagem = async function (req, res) {
    const { id } = req.params;
    const viagem = await modelViagem.getViagem(id)
    console.log(viagem)
    res.render('paginaEditarViagem', {viagem})
};

const alterarViagem = async function (req, res) {
    const { id } = req.params;
    const { title, imagepath, imagealt } = req.body;
    await modelViagem.alterarViagem(id, title, imagepath, imagealt)
    res.redirect('/todasViagens')
};

const excluirViagem = async function (req, res) {
    const { id } = req.params;
    const result = await modelViagem.verificaDiariosViagem(id)
    console.log(result)

    if (result === null) {
        await modelViagem.excluirViagem(id);

        res.json({ success: true, message: "Viagem excluída com sucesso!" });
    } else {
        res.status(400).json({ success: false, message: "Erro: Não é possível excluir a viagem, pois há diários cadastrados!" });
    }
};

module.exports = {paginaTodasViagens, paginaCriarViagem, criarViagem, paginaAlterarViagem, alterarViagem, excluirViagem}