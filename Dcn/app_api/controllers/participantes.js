var Participante = require('../models/participantes');

module.exports.buscaTodos = function (req, res) {
    Participante.find().sort({ nome: 1 }).exec()
        .then(
        function (participantes) {
            res.json(participantes);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.salva = function (req, res) {
    Participante.create(req.body)
        .then(
        function (participante) {
            res.json(participante);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.avaliacao = function (req, res) {
    Participante.findByIdAndUpdate(req.body._id, req.body).exec()
        .then(
        function (participante) {
            res.json(participante);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.buscaPontuacaoCosplay = function (req, res) {
    Participante.find({'cosplay' : true}).sort({ pontos: -1 }).exec()
        .then(
        function (participantes) {
            res.json(participantes);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.buscaPontuacaoCospobre = function (req, res) {
    Participante.find({'cosplay' : false}).sort({ pontos: -1 }).exec()
        .then(
        function (participantes) {
            res.json(participantes);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.remove = function (req, res) {
    var _id = req.params.id;
    Participante.remove({ "_id": _id }).exec()
        .then(
        function () {
            res.status(204).end();
        },
        function (erro) {
            return console.error(erro);
        }
        );
};
