var mongoose = require('mongoose');

var responsavelInscricao = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('ResponsavelInscricao', responsavelInscricao);