var partidasModel = require("../models/partidasModel");

function cadastrarPartidas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontuacao = req.body.pontuacaoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Passe os valores como parâmetro e vá para o arquivo partidasModel.js
    partidasModel.cadastrarPartidas(pontuacao, fkUsuario)
    .then(
        function (resultado) {
            res.json(resultado);
            console.log("Pontuação:", pontuacao);
            console.log("Usuário:", fkUsuario);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function buscarTop3(req, res) {
    // Passe os valores como parâmetro e vá para o arquivo partidasModel.js
    partidasModel.buscarTop3()
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nERRO AO BUSCAR TOP 3!",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}   

function buscarPersonagensEscolhidos(req, res) {
    // Passe os valores como parâmetro e vá para o arquivo partidasModel.js
    partidasModel.buscarPersonagensEscolhidos()
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nERRO AO BUSCAR PERSONAGENS!",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
} 

function maiorPontuacao(req, res) {
    var idUsuario = req.params.idUsuario;

    partidasModel.maiorPontuacao(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar maior pontuação:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrarPartidas,
    buscarTop3,
    buscarPersonagensEscolhidos,
    maiorPontuacao
}