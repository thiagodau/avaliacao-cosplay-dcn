var express = require('express');
var router = express.Router();
var ctrlContatos = require('../controllers/contatos');
var ctrlParticipantes = require('../controllers/participantes');
var ctrlAvaliadores = require('../controllers/avaliadores');
var ctrlResponsaveisInscricao = require('../controllers/responsaveisInscricao');
var ctrlAvaliacoes = require('../controllers/avaliacoes');

/* GET home page. */
router.get('/contatos', ctrlContatos.buscaTodos);
router.post('/contatos', ctrlContatos.salva);
router.delete('/contatos/:id', ctrlContatos.remove);
/* Participantes */
router.get('/participantes', ctrlParticipantes.buscaTodos);
router.get('/participantes/pontuacao-cosplay', ctrlParticipantes.buscaPontuacaoCosplay);
router.get('/participantes/pontuacao-cospobre', ctrlParticipantes.buscaPontuacaoCospobre);
router.post('/participantes', ctrlParticipantes.salva);
router.put('/participantes', ctrlParticipantes.avaliacao);
/* Avaliadores */
router.get('/avaliadores', ctrlAvaliadores.buscaTodos);
router.get('/avaliadores/presidente', ctrlAvaliadores.buscaPresidente);
router.post('/avaliadores', ctrlAvaliadores.salva);
router.delete('/avaliadores/:_id', ctrlAvaliadores.remove);
/* Responsaveis Inscricao */
router.get('/responsaveisInscricao', ctrlResponsaveisInscricao.buscaTodos);
router.post('/responsaveisInscricao', ctrlResponsaveisInscricao.salva);
/* Avaliacoes */
router.get('/avaliacoes', ctrlAvaliacoes.buscaTodos);
router.post('/avaliacoes', ctrlAvaliacoes.salva);
router.delete('/avaliacoes/:_id', ctrlAvaliacoes.remove);

module.exports = router;
