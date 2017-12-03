var express = require('express');
var router = express.Router();
var ctrlContatos = require('../controllers/contatos');
var ctrlParticipantes = require('../controllers/participantes');
var ctrlAvaliadores = require('../controllers/avaliadores');
var ctrlResponsaveisInscricao = require('../controllers/responsaveisInscricao');

/* GET home page. */
router.get('/contatos', ctrlContatos.buscaTodos);
router.post('/contatos', ctrlContatos.salva);
router.delete('/contatos/:id', ctrlContatos.remove);
/* Participantes */
router.get('/participantes', ctrlParticipantes.buscaTodos);
router.post('/participantes', ctrlParticipantes.salva);
/* Avaliadores */
router.get('/avaliadores', ctrlAvaliadores.buscaTodos);
router.post('/avaliadores', ctrlAvaliadores.salva);
/* Responsaveis Inscricao */
router.get('/responsaveisInscricao', ctrlResponsaveisInscricao.buscaTodos);
router.post('/responsaveisInscricao', ctrlResponsaveisInscricao.salva);


module.exports = router;
