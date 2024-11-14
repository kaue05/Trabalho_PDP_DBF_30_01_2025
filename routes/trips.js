var express = require('express');
var router = express.Router();
const { trips } = require('../controllers/viagensController')

/* GET home page. */
router.get('/', trips);

module.exports = router;