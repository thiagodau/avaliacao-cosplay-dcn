var ResponsavelInscricao = require('../models/responsaveisInscricao');

module.exports.buscaTodos = function (req, res) {
    ResponsavelInscricao.find().sort({ nome: 1 }).exec()
        .then(
        function (responsaveisInscricao) {
            res.json(responsaveisInscricao);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.salva = function (req, res) {
    ResponsavelInscricao.create(req.body)
        .then(
        function (ResponsavelInscricao) {
            res.json(ResponsavelInscricao);
        },
        function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
        );
};

module.exports.remove = function (req, res) {
    var _id = req.params.id;
    ResponsavelInscricao.remove({ "_id": _id }).exec()
        .then(
        function () {
            res.status(204).end();
        },
        function (erro) {
            return console.error(erro);
        }
        );
};
