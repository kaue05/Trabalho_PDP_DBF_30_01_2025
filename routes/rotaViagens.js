var express = require('express');
var router = express.Router();

const {paginaTodasViagens, paginaCriarViagem, criarViagem, paginaAlterarViagem, alterarViagem, excluirViagem} = require('../controllers/viagensController')

router.get('/todasViagens', paginaTodasViagens);
router.get('/paginaCriarViagem', paginaCriarViagem);
router.post('/criarViagem', criarViagem);
router.get('/editarViagem/:id', paginaAlterarViagem);
router.post('/alterarViagem/:id', alterarViagem);
router.get('/excluirViagem/:id', excluirViagem);

module.exports = router;