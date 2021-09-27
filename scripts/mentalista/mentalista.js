var secretNumber = parseInt(Math.random() * 11);
console.log(secretNumber);

function Chutar() {
    var chute = parseInt(document.querySelector("#valor").value);
    // console.log(chute);

    if (chute >= 0 && chute <= 10) {
        if (chute == secretNumber) {
            clearDivResErrado();
            exibirAcerto();
        } else if (chute < secretNumber) {

            clearDivResCerto();
            exibirErroValMin()
        } else if (chute > secretNumber) {

            clearDivResCerto();
            exibirErroValMax()
        }
    } else {
        clearDivResCerto();
        exibirErroIntervalo();

    }
}

function addClassGreen() {
    const elemento = document.getElementById("resultado-certo");

    if (elemento.classList) elemento.classList.add("resultado-certo");
    else elemento.className += " resultado-certo";
}

function addClassRed() {
    const elemento = document.getElementById("resultado-errado");

    if (elemento.classList) elemento.classList.add("resultado-errado");
    else elemento.className += " resultado-errado";
}


function rmClassGreen() {
    const elemento = document.getElementById("resultado-certo");

    if (elemento.classList) elemento.classList.remove("resultado-certo");
    //else elemento.className += " ";
}

function rmClassRed() {
    const elemento = document.getElementById("resultado-errado");

    if (elemento.classList) elemento.classList.remove("resultado-errado");
    //else elemento.className += " ";
}


function exibirErroIntervalo() {
    addClassRed();
    document.getElementById(
        "resultado-errado"
    ).innerHTML = `Escolha um número entre 0 e 10`;
}

function exibirErroValMin() {
    addClassRed();
    document.getElementById(
        "resultado-errado"
    ).innerHTML = `O valor informado é menor que numero secreto!\n Tente novamente!`;
}

function exibirErroValMax() {
    addClassRed();
    document.getElementById(
        "resultado-errado"
    ).innerHTML = `O valor informado é maior que numero secreto!\n Tente novamente!`;
}

function exibirAcerto() {
    addClassGreen()
    document.getElementById(
        "resultado-certo"
    ).innerHTML = `Você acertou! Parabéns!`;
}

function clearDivResErrado() {
    rmClassRed()
    document.getElementById("resultado-errado").innerHTML = ``
}

function clearDivResCerto() {
    rmClassGreen()
    document.getElementById("resultado-certo").innerHTML = ``
}