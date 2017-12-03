var mongoose = require('mongoose');

var participante = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    personagem: {
        type: String,
        required: true
    },
    cosplay: {
        type: Boolean,
        required: true
    },
    pontos: {
        type: Number,
        default: null
    }
});

module.exports = mongoose.model('Participante', participante);