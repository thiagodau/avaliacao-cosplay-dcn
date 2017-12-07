var mongoose = require('mongoose');

var avaliacao = new mongoose.Schema({
    cpf: {
        type: String,
        required: true
    },
    iniciada: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Avaliacao', avaliacao);