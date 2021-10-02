var cartas = [];
var carta1 = {
    nome: "Bulbassauro",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    },
    imagem: "https://images.mod-fashions.com/img/lists/2/ashquots-15-most-powerful-pokmon-anime_1.jpg"
}
var carta2 = {
    nome: "Darth Vader",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    },
    imagem: "https://t.ctcdn.com.br/kmt3ZJfIUukQSMZQ8I0hTYs2dgc=/1245x700/smart/i392749.jpeg"
}
var carta3 = {
    nome: "Shiryu de Dragão",
    atributos: {
        ataque: 5,
        defesa: 5,
        magia: 10
    },
    imagem: "https://i.pinimg.com/originals/f5/08/64/f50864fc85dc9647ec4294a9c7d3ffb2.jpg"
}
var carta4 = {
    nome: "Monkey D. Luffy",
    atributos: {
        ataque: 9,
        defesa: 10,
        magia: 2
    },
    imagem: "https://i.pinimg.com/736x/f0/af/cb/f0afcbce7ed4a7df7b822964501bf995.jpg"
}
var carta5 = {
    nome: "Shanks, O Ruivo",
    atributos: {
        ataque: 10,
        defesa: 10,
        magia: 10
    },
    imagem: "https://criticalhits.com.br/wp-content/uploads/2020/02/Shanks.jpg"
}
var carta6 = {
    nome: "Yato",
    atributos: {
        ataque: 7,
        defesa: 6,
        magia: 10
    },
    imagem: "https://i.pinimg.com/originals/cb/f3/f5/cbf3f5f5e206b0dc7895c7bca8057cbe.jpg"
}
var carta7 = {
    nome: "Mob",
    atributos: {
        ataque: 10,
        defesa: 10,
        magia: 10
    },
    imagem: "https://observatoriodoaudiovisual.com.br/wp-content/uploads/2020/10/mob_psycho_100_1140025_1280x0-2.jpeg"
}
var carta8 = {
    nome: "Reigen",
    atributos: {
        ataque: 3,
        defesa: 3,
        magia: 0
    },
    imagem: "https://www.einerd.com.br/wp-content/uploads/2019/02/reigen-mob-psycho-100-e1550580236238.jpg"
}
var carta9 = {
    nome: "Jotarou Kujoh",
    atributos: {
        ataque: 10,
        defesa: 7,
        magia: 4
    },
    imagem: "https://pbs.twimg.com/profile_images/1006431799264927744/omz1UkV6.jpg"
}
var carta10 = {
    nome: "Dio Brando",
    atributos: {
        ataque: 10,
        defesa: 17,
        magia: 5
    },
    imagem: "https://cupulatrovao.com.br/wp-content/uploads/2019/12/Dio-Brando-em-Jojo-com-olhar-triunfante-1.jpg"
}
var carta11 = {
    nome: "Gon Freeks",
    atributos: {
        ataque: 9,
        defesa: 9,
        magia: 3
    },
    imagem: "https://gabixavier.com.br/wp-content/uploads/2020/04/2a07515ae2ec3d4155bf28cfdec4c0b3-700-1-1024x576.jpg"
}
var carta12 = {
    nome: "Hisoka",
    atributos: {
        ataque: 10,
        defesa: 10,
        magia: 10
    },
    imagem: "https://criticalhits.com.br/wp-content/uploads/2020/12/b8ef33ad8b01122afa4356b86c3da90c.jpg"
}


var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12]

var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 12);
    var numeroCartaJogador

    do {
        numeroCartaJogador = parseInt(Math.random() * 12);
    } while (numeroCartaJogador == numeroCartaMaquina);


    cartaMaquina = cartas[numeroCartaMaquina]
    cartaJogador = cartas[numeroCartaJogador]

    console.log(cartaJogador)

    var botaoSortear = document.getElementById('btnSortear')
    botaoSortear.disabled = true;

    var botaoJogar = document.getElementById('btnJogar')
    botaoJogar.disabled = false;

    var sorteada = document.getElementById('carta-jogador')


    exibirCartaJogador()
}


function obtemAtributo() {
    var radioAtributos = document.getElementsByName('atributo');

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributo();
    var divResultado = ''


    var cardJogador = cartaJogador.atributos[atributoSelecionado];
    var cardMaquina = cartaMaquina.atributos[atributoSelecionado];
    var resultado = document.getElementById('resultado')


    if (cardJogador > cardMaquina) {
        // resultado.innerHTML = `<p class ="resultado-certo" >O Jogador venceu a máquina!</p>`
        divResultado = "<p class='resultado-final resultado-certo' > Venceu!</p>"

    } else if (cardJogador < cardMaquina) {
        // resultado.innerHTML = `<p class ="resultado-errado">A máquina venceu o jogador!</p>`
        divResultado = "<p class='resultado-final resultado-errado' > Perdeu!</p>"
    } else {
        // resultado.innerHTML = `<p class ="empate">Houve um empate!</p>`
        divResultado = "<p style='background-color: grey;' class='resultado-final' > Empatou!</p>"
    }

    resultado.innerHTML = divResultado;
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
}


function exibirCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador')
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHtml = "<div id='opcoes' class='carta-status atributo'>"
    // var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        console.log(atributo)
        opcoesTexto += `<input type="radio" name="atributo" value="${atributo}">${atributo} ${cartaJogador.atributos[atributo]}<br>`
    }
    var nome = `<p class="carta-subtitle" >${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";


}
function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina')
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHtml = "<div id='opcoes' class='carta-status'>"
    // var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += `<p class="atributo" name="atributo" value="${atributo}">${atributo} ${cartaMaquina.atributos[atributo]} </p>`
    }
    var nome = `<p class="carta-subtitle" >${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";


}