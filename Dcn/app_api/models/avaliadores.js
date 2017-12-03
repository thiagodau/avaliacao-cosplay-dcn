var mongoose = require('mongoose');

var avaliador = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    interno: {
        type: Boolean,
        required: true
    },
    presidente: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Avaliador', avaliador);