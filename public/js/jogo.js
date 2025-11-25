b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
fkPersonagem = sessionStorage.FK_PERSONAGEM;

var personagem = document.getElementById('personagem');

    if (fkPersonagem == 1) {
        fotoPerfil.src = "assets/imgs/perfilOnze.jpeg";
        personagem.src = "assets/imgs/onze.gif";
    } else if (fkPersonagem == 2) {
        fotoPerfil.src = "assets/imgs/perfilMike.jpeg";
        personagem.src = "assets/imgs/mike.gif";
    } else if (fkPersonagem == 3) {
        fotoPerfil.src = "assets/imgs/perfilDustin.jpeg";
        personagem.src = "assets/imgs/dustin.gif";
    } else if (fkPersonagem == 4) {
        fotoPerfil.src = "assets/imgs/perfilWill.jpeg";
        personagem.src = "assets/imgs/will.gif";
    } else if (fkPersonagem == 5) {
        fotoPerfil.src = "assets/imgs/perfilLucas.jpeg";
        personagem.src = "assets/imgs/lucas.gif";
    } else {
        fotoPerfil.src = "assets/imgs/perfilMax.jpeg";
        personagem.src = "assets/imgs/max.gif";
    }

var jogarNovamente = document.getElementById('jogarNovamente');

var obstaculo = document.getElementById('obstaculo');

var pontuacao = 0;
var pontoContado = false; // evita pontuar várias vezes

var pular = () => {
    personagem.classList.add('pular');
    
    setTimeout(() => {

        personagem.classList.remove('pular');

    }, 500);

}

var partidaCadastrada = false;

var loop = setInterval(() => {

    var posicaoObstaculo = obstaculo.offsetLeft;
    var posicaoPersonagem = window.getComputedStyle(personagem).bottom.replace('px', '');
    
    
    if (posicaoObstaculo <= 100 && posicaoObstaculo > 0 && posicaoPersonagem < 80) {
        
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${posicaoObstaculo}px`;
    
        personagem.style.animation = 'none';
        personagem.style.bottom = `${posicaoPersonagem}px`;
    
        // personagem.src = "../assets/imgs/onze.webp";
        // personagem.style.width = "75px";
        // personagem.style.marginLeft = "50px";

        clearInterval(loop);


        if (!partidaCadastrada) {
            partidaCadastrada = true;
            cadastrarPartidas(); // faz 1 fetch
            jogarNovamente.style.display = "block";
        }

            
    } else {

       if (posicaoObstaculo <= 0 && !pontoContado) {

            pontuacao += 1;
            div_pontos.innerHTML = `PONTUAÇÃO: ${pontuacao}`;
            

            pontoContado = true; // marca que já contou
        }

        // QUANDO O OBSTÁCULO VOLTA À DIREITA libera ponto de novo
        if (posicaoObstaculo > 500) {
            pontoContado = false;
        }
    } 
    
}, 10);

document.onkeydown = pular;


function cadastrarPartidas() {

    var pontuacaoVar = pontuacao;
    var fkUsuarioVar = sessionStorage.ID_USUARIO;

    fetch("/partidas/cadastrarPartidas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            pontuacaoServer: pontuacaoVar,
            fkUsuarioServer: fkUsuarioVar,
        }),
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {
        console.log(`A pontuação foi guardada!`);
        // dashboard();

        } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
        }
    }).catch(function (resposta) {
       console.log(`#ERRO DE REDE: ${resposta}`);
    });
    return false;
}

// quando chegar na tela final e caso queira jogar novamente
function reiniciarJogo() {
    jogarNovamente.style.display = "none";

    window.location = "jogo.html";
}

// function cadastrarPontuacaoJogo() {
    
//     fetch("/pontos/pontuacaoJogo", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({}),
//     }).then(function (resposta) {
//         console.log("resposta: ", resposta);
//         if (resposta.ok) {
//         console.log(`pontuação cadastrada!`);
//         cadastrarPontuacaoJogo();

//         } else {
//             throw "Houve um erro ao tentar realizar o cadastro!";
//         }
//     }).catch(function (resposta) {
//        console.log(`#ERRO DE REDE: ${resposta}`);
//     });
//     return false;
// }
