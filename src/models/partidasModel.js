var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrarPartidas(pontuacao, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPartidas():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO partida (pontuacao, fkUsuario) VALUES ('${pontuacao}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTop3() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarTop3():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT usuario.nome, partida.pontuacao 
            FROM partida JOIN usuario
                ON usuario.idUsuario = partida.fkUsuario
            ORDER BY pontuacao DESC
		    LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPersonagensEscolhidos() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPersonagensEscolhidos():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT personagem.nome,
            COUNT(usuario.fkPersonagem) AS qtdEscolhido
		        FROM usuario
	        JOIN personagem 
		        ON idPersonagem = fkPersonagem
	        GROUP BY personagem.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maiorPontuacao(idUsuario) {
    var instrucao = `
        SELECT MAX(pontuacao) AS maiorPontuacao
        FROM partida
        WHERE fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}

function qtdPartidas(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(idPartida) AS qtdPartidas
        FROM partida 
        WHERE fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarPartidas,
    buscarTop3,
    buscarPersonagensEscolhidos,
    maiorPontuacao,
    qtdPartidas
};