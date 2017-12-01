var express = require('express');
var router = express.Router();
var ctrlContatos = require('../controllers/contatos');
var ctrlParticipantes = require('../controllers/participantes');

/* GET home page. */
router.get('/contatos', ctrlContatos.buscaTodos);
router.post('/contatos', ctrlContatos.salva);
router.delete('/contatos/:id', ctrlContatos.remove);
/* Participantes */
router.get('/participantes', ctrlParticipantes.buscaTodos);
module.exports = router;
