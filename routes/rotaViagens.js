var express = require('express');
var router = express.Router();

const { paginaTodasViagens, paginaCriarViagem,  criarViagem } = require('../controllers/viagensController')

router.get('/todasViagens', paginaTodasViagens);
router.get('/paginaCriarViagem', paginaCriarViagem);
router.post('/criarViagem', criarViagem);

module.exports = router;