var Avaliacao = require('../models/avaliacoes');

module.exports.buscaTodos = function (req, res) {
    Avaliacao.find().sort({ nome: 1 }).exec()
        .then(
        function (avaliacoes) {
            res.json(avaliacoes);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.salva = function (req, res) {
    Avaliacao.create(req.body)
        .then(
        function (avaliacao) {
            res.json(avaliacao);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.remove = function (req, res) {
    var _id = req.params._id;
    Avaliacao.remove({ "_id": _id }).exec()
        .then(
        function () {
            res.status(204).end();
        },
        function (erro) {
            return console.error(erro);
        }
        );
};

module.exports.buscaStatusAvaliacao = function (req, res) {
    Avaliacao.find({'iniciada' : true}).exec()
        .then(
        function (avaliacoes) {
            res.json(avaliacoes);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};
