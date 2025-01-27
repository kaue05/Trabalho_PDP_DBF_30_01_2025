var express = require('express');
var router = express.Router();

const { paginaHome, paginaCriarDiario, criarDiario, paginaTodosDiarios, sobreDiario, paginaDiariosViagem} = require('../controllers/diariosController')

router.get('/home', paginaHome);
router.get('/paginaCriarDiario', paginaCriarDiario);
router.post('/criarDiario', criarDiario);
router.get('/todosDiarios', paginaTodosDiarios);
router.get('/todosDiarios/:id', sobreDiario);
router.get('/diariosViagem/:id', paginaDiariosViagem);

module.exports = router;