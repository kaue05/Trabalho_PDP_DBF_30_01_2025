var express = require('express');
var router = express.Router();
const { abouttrip } = require('../controllers/viagensController')

/* GET home page. */
router.get('/viagens/all/:id', abouttrip);

module.exports = router;