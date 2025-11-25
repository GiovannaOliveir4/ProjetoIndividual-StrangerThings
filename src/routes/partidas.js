var express = require("express");
var router = express.Router();

var partidasController = require("../controllers/partidasController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarPartidas", function (req, res) {
    partidasController.cadastrarPartidas(req, res);
});

router.get("/buscarTop3", function (req, res) {
    partidasController.buscarTop3(req, res);
});

router.get("/personagensEscolhidos", function (req, res) {
    partidasController.buscarPersonagensEscolhidos(req, res);
});

router.get("/maiorPontuacao/:idUsuario", function (req, res) {
    partidasController.maiorPontuacao(req, res);
});

router.get("/qtdPartidas/:idUsuario", function (req, res) {
    partidasController.qtdPartidas(req, res);
});

module.exports = router; 