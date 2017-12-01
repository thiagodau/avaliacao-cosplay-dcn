var mongoose = require('mongoose');

var contato = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String
    },
    email: {
        type: String
    },
    fav: {
        type: Boolean
    }
});

module.exports = mongoose.model('Contato', contato);