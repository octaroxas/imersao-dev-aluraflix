var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var gui = { nome: "Gui", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

var jogadores = [paulo, rafa, gui]

function calcScore(jogador) {
  var pontos = (Number(jogador.vitorias * 3)) + Number(jogador.empates);
  jogador.pontos = pontos;
}

function mostrarJogadores(listaJogadores) {
  var elemento = ``
  for (var i = 0; i < listaJogadores.length; i++) {
    elemento += `<tr scope="row"><td>${listaJogadores[i].nome}</td>
        <td>${listaJogadores[i].vitorias}</td>
        <td>${listaJogadores[i].empates}</td>
        <td>${listaJogadores[i].derrotas}</td>
        <td>${listaJogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
      </tr>`;
    var tabelaJogadores = document.getElementById('tabelaJogadores');
    tabelaJogadores.innerHTML = elemento;
  }

}

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++;
  calcScore(jogador)
  console.log(jogadores[i].vitorias)
  mostrarJogadores(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++;
  calcScore(jogador)
  mostrarJogadores(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++;
  calcScore(jogador)
  mostrarJogadores(jogadores)
}

function novoJogador() {
  var novoJogador = document.getElementById('novoJogador').value;
  document.getElementById('novoJogador').value = null;

  if (novoJogador != null && novoJogador != "") {
    jogadores.push({
      nome: novoJogador,
      vitorias: 0,
      derrotas: 0,
      empates: 0,
      pontos: 0
    })

    var divErro = document.getElementById('erro');
    divErro.innerHTML = `<p></p>`

    mostrarJogadores(jogadores)
  } else {
    var divErro = document.getElementById('erro');
    divErro.innerHTML = `<p>O nome do jogador não pode ser vazio!</p>`
  }

  mostrarJogadores(jogadores)
  
}

function zerar() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].empates = 0;
    jogadores[i].pontos = 0;
  }
  mostrarJogadores(jogadores)
}



calcScore(rafa)
calcScore(paulo)
calcScore(gui)

mostrarJogadores(jogadores)

// rafa.pontos = calcScore(rafa)
// rafa.pontos = calcScore(paulo)






