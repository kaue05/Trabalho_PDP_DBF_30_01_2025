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

module.exports = {paginaTodasViagens, paginaCriarViagem, criarViagem}