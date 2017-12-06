var Avaliador = require('../models/avaliadores');

module.exports.buscaTodos = function (req, res) {
    Avaliador.find().sort({ nome: 1 }).exec()
        .then(
        function (avaliadores) {
            res.json(avaliadores);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.buscaPresidente = function (req, res) {
    Avaliador.find({"presidente" : true}).exec()
        .then(
        function (avaliadores) {
            res.json(avaliadores);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.salva = function (req, res) {
    Avaliador.create(req.body)
        .then(
        function (avaliador) {
            res.json(avaliador);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.remove = function (req, res) {
    var _id = req.params.id;
    Avaliador.remove({ "_id": _id }).exec()
        .then(
        function () {
            res.status(204).end();
        },
        function (erro) {
            return console.error(erro);
        }
        );
};
