var aluno = "Octacílio";
var notaPrimeiroBim = 9;
var notaSegundoBim = 7;
var notaTerceiroBim = 4;
var notaQuartoBim = 2;
//comment
/*

this is a comment to*/
var notaFinal = (notaPrimeiroBim + notaSegundoBim + notaTerceiroBim + notaQuartoBim) / 4;

var noteRound = notaFinal.toFixed(2);

console.log(`Bem vindo ${aluno}!`)
console.log(`Sua nota é ${noteRound}`)

function calcMedia(n1, n2, n3, n4) {
    nota1 = Number(document.getElementById(n1).value);
    nota2 = Number(document.getElementById(n2).value);
    nota3 = Number(document.getElementById(n3).value);
    nota4 = Number(document.getElementById(n4).value);

    const soma = nota1 + nota2 + nota3 + nota4;
    const media = (soma / 4).toFixed(1);

    if (media >= 6) {
        document.getElementById("result").innerHTML = `<p class="passou">Olá ${aluno}! <br> Você foi <strong>APROVADO</strong> <br> Sua média final é: ${media}</p>`
    } else {
        document.getElementById("result").innerHTML = `<p class="nao-passou">Olá ${aluno}!<br> Você foi <strong>REPROVADO</strong> <br>Sua média final é: ${media}</p>`
    }


}